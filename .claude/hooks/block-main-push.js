#!/usr/bin/env node
// PreToolUse hook (matcher: Bash). Second safety lock next to the permission
// rules in .claude/settings.json. Blocks (exit 2):
//   - `gh pr merge` (PRs are merged by a human on GitHub)
//   - `git push` when the current branch is main/master
//   - `git push` that targets main/master (main, HEAD:main, refs/heads/main, ...)
//   - force pushes (-f, --force, --force-with-lease, --force-if-includes, +refspec)
//   - `git push --all` / `--mirror` (would also push main)
// Everything else exits 0.

const { execSync } = require('child_process');

const PROTECTED = ['main', 'master'];

function block(reason) {
  process.stderr.write(
    `BLOCKED by .claude/hooks/block-main-push.js: ${reason}\n` +
      'Rule: never push or merge to main/master and never force-push. ' +
      'Push a feature branch and open a pull request instead (gh pr create).\n'
  );
  process.exit(2);
}

function currentBranch(cwd) {
  // symbolic-ref also works on a branch with no commits yet;
  // rev-parse is the fallback (e.g. detached HEAD -> "HEAD").
  for (const cmd of ['git symbolic-ref --short HEAD', 'git rev-parse --abbrev-ref HEAD']) {
    try {
      const out = execSync(cmd, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
      if (out) return out;
    } catch {
      // try next
    }
  }
  return '';
}

// Is this refspec/arg pointing at a protected branch?
function targetsProtected(arg) {
  const a = arg.replace(/^\+/, '');
  const dest = a.includes(':') ? a.split(':').pop() : a;
  const name = dest.replace(/^refs\/heads\//, '');
  return PROTECTED.includes(name);
}

// `git push`, `git -C dir push`, `git -c k=v push`, `git --no-pager push`, ...
// (but not `git commit -m "push to main"`)
const GIT_PUSH = /\bgit(?:\s+(?:-C\s+\S+|-c\s+\S+|--?[\w-]+(?:=\S+)?))*\s+push\b/;

function checkGitPush(segment, cwd) {
  const m = GIT_PUSH.exec(segment);
  const args = segment
    .slice(m.index + m[0].length)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => t.replace(/^["']|["']$/g, ''));

  for (const t of args) {
    if (/^--force(-with-lease|-if-includes)?(=.*)?$/.test(t)) block(`force push is not allowed ("${t}")`);
    if (/^-[a-zA-Z]*f[a-zA-Z]*$/.test(t)) block(`force push is not allowed ("${t}")`);
    if (t === '--all' || t === '--mirror') block(`"${t}" would push main/master`);
    if (!t.startsWith('-') && t.startsWith('+')) block(`force refspec is not allowed ("${t}")`);
    if (!t.startsWith('-') && targetsProtected(t)) block(`push targets a protected branch ("${t}")`);
  }

  const branch = currentBranch(cwd);
  if (PROTECTED.includes(branch)) {
    block(`current branch is "${branch}"; pushing from main/master is not allowed`);
  }
}

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => (raw += c));
process.stdin.on('end', () => {
  let input;
  try {
    input = JSON.parse(raw || '{}');
  } catch {
    block('could not parse hook input (failing closed)');
  }

  const command = String((input.tool_input && input.tool_input.command) || '');
  if (!command) process.exit(0);
  const cwd = input.cwd || process.env.CLAUDE_PROJECT_DIR || process.cwd();

  // Check each part of chained commands separately: a && b ; c | d
  const segments = command.split(/&&|\|\||;|\||\n/);
  for (const seg of segments) {
    if (/\bgh\s+pr\s+merge\b/.test(seg)) block('"gh pr merge" is not allowed; merge PRs yourself on GitHub');
    if (GIT_PUSH.test(seg)) checkGitPush(seg, cwd);
  }
  process.exit(0);
});
