import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message, consent } = body
    
    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    // Send email to your team
    const emailResult = await resend.emails.send({
      from: `NightShield Contact <${process.env.NOREPLY_EMAIL || 'noreply@nightshield.ai'}>`,
      to: [process.env.CONTACT_EMAIL || 'contact@nightshield.ai'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc2626; margin: 0; font-size: 28px;">🛡️ NightShield</h1>
            <h2 style="color: #ffffff; margin: 10px 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #dc2626; margin-top: 0; font-size: 18px;">📋 Contact Details</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${body.company || 'Not provided'}</p>
            <p style="margin: 8px 0;"><strong>Venue Type:</strong> ${body.venueType || 'Not specified'}</p>
          </div>
          
          <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #dc2626; margin-top: 0; font-size: 18px;">💬 Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="background: #1e3a1e; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <p style="margin: 0; color: #22c55e; font-weight: bold;">✓ GDPR Consent Given</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #444;">
          
          <div style="text-align: center; color: #888; font-size: 14px;">
            <p>This message was sent from the NightShield contact form</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        🛡️ NightShield - New Contact Form Submission
        
        Contact Details:
        - Name: ${name}
        - Email: ${email}
        - Company: ${body.company || 'Not provided'}
        - Venue Type: ${body.venueType || 'Not specified'}
        
        Message:
        ${message}
        
        ✓ GDPR Consent: Given
        
        Sent from NightShield contact form on ${new Date().toLocaleString()}
      `
    })

    // Send auto-reply to the user
    await resend.emails.send({
      from: `NightShield <${process.env.NOREPLY_EMAIL || 'noreply@nightshield.ai'}>`,
      to: [email],
      subject: 'Thank you for contacting NightShield',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #ffffff; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc2626; margin: 0; font-size: 28px;">🛡️ NightShield</h1>
            <h2 style="color: #ffffff; margin: 10px 0; font-size: 24px;">Thank You for Your Interest!</h2>
          </div>
          
          <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            <p style="line-height: 1.6;">Thank you for reaching out to NightShield! We've received your message and our security experts will review your requirements.</p>
            
            <div style="background: #dc2626; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold; font-size: 18px;">⏰ Response Time: Within 24 Hours</p>
            </div>
            
            <p style="line-height: 1.6;">In the meantime, you can:</p>
            <ul style="line-height: 1.8;">
              <li>📅 <a href="https://calendly.com/nightshield/demo" style="color: #dc2626; text-decoration: none;">Schedule a personalized demo</a></li>
              <li>📞 Call us directly at <a href="tel:+447706085067" style="color: #dc2626; text-decoration: none;">+44 7706085067</a></li>
              <li>🌐 Visit our website for more information</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              NightShield - Advanced Security Solutions for Nightlife Venues<br>
              Croydon, London | contact@nightshield.ai
            </p>
          </div>
        </div>
      `
    })

    // Log the submission
    console.log('Contact form submission received:', {
      name,
      email,
      company: body.company,
      venueType: body.venueType,
      message,
      consent,
      timestamp: new Date().toISOString(),
      emailId: emailResult.data?.id
    })
    
    // Log the submission (in production, you might want to save to database)
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      company: body.company || '',
      venueType: body.venueType || '',
      message,
      consent,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    }
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    // 4. Integrate with CRM
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      submissionId: submission.id
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
