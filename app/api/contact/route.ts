import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, budget, message } = await request.json();

    // Verify required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // SMTP configuration
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'wildhood00@gmail.com';

    // If SMTP environment variables are not set, log and return fallback success
    if (!host || !user || !pass) {
      console.log('--- SMTP email sending is not configured ---');
      console.log('Inquiry Details:', { name, email, phone, projectType, budget, message });
      console.log('To activate actual emails, configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env file.');
      return NextResponse.json({
        success: true,
        message: 'Message received and logged. Set SMTP credentials in .env to send real emails.',
        logged: true
      });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: `New Inquiry from ${name} - Wildhood Photography`,
      text: `
New Contact Inquiry from ${name}

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not specified'}
Photography Category: ${projectType || 'Not specified'}
Budget Range: ${budget || 'Not specified'}

Message / Creative Concept:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #112c24; max-width: 600px; margin: 0 auto; border: 1px solid #d2e0dc; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #1A3A34; color: #ffffff; padding: 28px 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: bold; letter-spacing: 2px; font-family: 'Playfair Display', Georgia, serif;">WILDHOOD PHOTOGRAPHY</h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.85; letter-spacing: 1px; uppercase">New Website Inquiry</p>
          </div>
          <div style="padding: 28px 24px; background-color: #ffffff;">
            <h2 style="color: #1A3A34; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f2f7f5; padding-bottom: 8px; font-family: 'Playfair Display', Georgia, serif;">Inquiry Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #4c6e65; font-size: 14px;">Name:</td>
                <td style="padding: 8px 0; color: #112c24; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4c6e65; font-size: 14px;">Email:</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2c5e54; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4c6e65; font-size: 14px;">Phone:</td>
                <td style="padding: 8px 0; color: #112c24; font-size: 14px;">${phone || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4c6e65; font-size: 14px;">Category:</td>
                <td style="padding: 8px 0; color: #112c24; font-size: 14px; text-transform: capitalize;">${projectType || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4c6e65; font-size: 14px;">Budget Range:</td>
                <td style="padding: 8px 0; color: #1A3A34; font-weight: bold; font-size: 14px;">${budget || 'Not specified'}</td>
              </tr>
            </table>

            <h2 style="color: #1A3A34; font-size: 18px; border-bottom: 2px solid #f2f7f5; padding-bottom: 8px; font-family: 'Playfair Display', Georgia, serif;">Project Details / Message</h2>
            <div style="background-color: #f2f7f5; padding: 18px; border-radius: 6px; color: #112c24; white-space: pre-wrap; font-style: italic; font-size: 14.5px; border-left: 4px solid #2c5e54;">${message}</div>
          </div>
          <div style="background-color: #f2f7f5; padding: 14px; text-align: center; font-size: 11px; color: #4c6e65; border-top: 1px solid #d2e0dc;">
            Sent automatically from the Wildhood Photography Website.
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Inquiry email sent successfully!',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
