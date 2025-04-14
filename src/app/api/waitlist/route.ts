import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    await resend.emails.send({
      from: 'KafeLog <onboarding@resend.dev>',
      to: ['officialcihan0248@gmail.com'], 
      subject: 'New KafeLog Waitlist Signup',
      text: `New signup for KafeLog waitlist:\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 