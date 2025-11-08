import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you can save to database
    // Option 1: Vercel Postgres
    // Option 2: Airtable
    // Option 3: Google Sheets
    // Option 4: Send email notification

    // For now, let's log the data (you can see this in Vercel logs)
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // You can also send an email notification here
    // using services like Resend, SendGrid, or Nodemailer

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
