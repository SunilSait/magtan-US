import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, subject, message, hp } = body;

    // 1. Honeypot check (anti-spam bot trap)
    // If hidden 'hp' field is filled, silently return success without storing
    if (hp) {
      return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
    }

    // 2. Server-side validation
    if (!fullName || !email || !company || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toISOString();

    // 3. Primary Storage: Insert into Supabase Database
    const hasSupabaseConfig =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    if (hasSupabaseConfig) {
      const { error: dbError } = await supabase.from('contacts').insert([
        {
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          company: company.trim(),
          subject: subject.trim(),
          message: message.trim(),
        },
      ]);

      if (dbError) {
        console.error('Supabase DB Insert Error:', dbError);
        // If Supabase fails, continue to notify via Google Apps Script so lead is not lost
      }
    } else {
      console.warn('Supabase credentials not configured in environment variables.');
    }

    // 4. Automation & Notification: Trigger Google Apps Script (Google Sheets + Email)
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: fullName.trim(),
            email: email.trim(),
            company: company.trim(),
            subject: subject.trim(),
            message: message.trim(),
            timestamp: submissionTime,
          }),
        });
      } catch (scriptError) {
        console.error('Google Apps Script trigger error:', scriptError);
      }
    } else {
      console.warn('GOOGLE_APPS_SCRIPT_URL not configured in environment variables.');
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry successfully submitted.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your inquiry.' },
      { status: 500 }
    );
  }
}
