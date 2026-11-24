import Link from 'next/link';

export default function HeadOfficeTeam() {
  const teamMembers = [
    {
      name: 'M Imran',
      role: 'Faast Marketing Manager'
    },
    {
      name: 'Ahsan',
      role: 'Coordinator'
    },
    {
      name: 'Usman',
      role: 'Recovery Manager'
    },
    {
      name: 'Huzaifa Khan',
      role: 'Accountant'
    },
    {
      name: 'Sabeeh Adil',
      role: 'KPO'
    },
    {
      name: 'Haris',
      role: 'Office Maintenance Incharge'
    },
    {
      name: 'Atif Mashwani',
      role: 'Transport Manager'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Link 
              href="/about" 
              className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to About</span>
            </Link>
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Head Office <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our leadership team driving excellence across Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CEO */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 border-2 border-transparent hover:border-red-200 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>
              <div className="w-36 h-36 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-5xl">H</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Haseeb Muzammil Khan</h3>
              <p className="text-red-600 font-semibold text-xl mb-6">Chief Executive Officer (CEO)</p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Haseeb Muzamil Khan leads Faast Marketing with vision and experience, guiding the company&apos;s growth and strategy across Pakistan.
              </p>
              <div className="mt-10 pt-10 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Role</p>
                    <p className="text-gray-900 font-bold text-lg">CEO</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Office</p>
                    <p className="text-gray-900 font-bold text-lg">Head Office</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Leadership</p>
                    <p className="text-gray-900 font-bold text-lg">Company Vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office Team */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Head Office Team
              </h2>
              <p className="text-lg text-gray-600">Dedicated professionals supporting our operations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => {
                const gradients = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-pink-500',
                  'from-green-500 to-emerald-500',
                  'from-orange-500 to-red-500',
                  'from-indigo-500 to-blue-500',
                  'from-teal-500 to-cyan-500',
                  'from-rose-500 to-pink-500',
                  'from-amber-500 to-orange-500'
                ];
                const gradient = gradients[index % gradients.length];
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-24 h-24 mb-5 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-3xl">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{member.name}</h3>
                      <p className="text-red-600 font-semibold text-sm mb-2 leading-tight">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white opacity-95 mb-10 leading-relaxed">
            We're always looking for talented individuals to join our growing team
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

