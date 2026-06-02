// API Route for sending contact form emails
// This file should be deployed as a serverless function

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Email template
    const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 40px 30px; background: linear-gradient(135deg, #1a2332 0%, #e67e50 100%); text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">🎨 Guru Painting Services</h1>
              <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">New Contact Form Submission</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">You have received a new inquiry from your website contact form.</p>
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td style="padding: 20px; background-color: #f8f9fa; border-left: 4px solid #e67e50; border-radius: 8px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                      <tr>
                        <td style="width: 120px; padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">👤 Name:</td>
                        <td style="padding: 8px 0; color: #1a2332; font-size: 15px; font-weight: 500;">${name}</td>
                      </tr>
                    </table>
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                      <tr>
                        <td style="width: 120px; padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">📧 Email:</td>
                        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #e67e50; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a></td>
                      </tr>
                    </table>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="width: 120px; padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">📱 Phone:</td>
                        <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #e67e50; text-decoration: none; font-size: 15px; font-weight: 500;">${phone}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div style="margin: 30px 0;">
                <h3 style="margin: 0 0 15px; color: #1a2332; font-size: 18px; font-weight: 600;">💬 Message:</h3>
                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #7fa99b;">
                  <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                <tr>
                  <td align="center" style="padding: 10px;">
                    <a href="mailto:${email}" style="display: inline-block; padding: 14px 30px; background-color: #e67e50; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; margin: 0 5px;">Reply via Email</a>
                    <a href="tel:${phone}" style="display: inline-block; padding: 14px 30px; background-color: #1a2332; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; margin: 0 5px;">Call Customer</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px; background-color: #1a2332; text-align: center;">
              <p style="margin: 0 0 10px; color: #ffffff; font-size: 14px; opacity: 0.8;">This email was sent from your website contact form</p>
              <p style="margin: 0; color: #e67e50; font-size: 13px; font-weight: 600;">Guru Painting Services - India's Trusted Painting Services</p>
              <p style="margin: 10px 0 0; color: #ffffff; font-size: 12px; opacity: 0.7;">📍 Chinchwad Gaon, Pimpri-Chinchwad, Maharashtra, 411033</p>
              <p style="margin: 5px 0 0; color: #ffffff; font-size: 12px; opacity: 0.7;">📞 +91 8668415858 | ✉️ contact@gurupaintingservices.in</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Send email using fetch to a mail service
    // You can use services like SendGrid, Mailgun, or your hosting provider's SMTP

    // Example using Resend (recommended for easy setup)
    const apiKey = import.meta.env.VITE_API_KEY;
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // Add your API key in environment variables
      },
      body: JSON.stringify({
        from: 'website@pandithomewallpainting.com', // Your verified domain
        to: 'jakshay18397@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: emailHTML,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again.'
    });
  }
}
