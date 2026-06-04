# Email Setup Instructions for Contact Form

This document explains how to set up the contact form to send emails to **sanghapalpandit@gmail.com** when deployed to a server.

## ✅ What's Already Done

1. **Contact Form** - Ready with professional design and validation
2. **Email Template** - Beautiful HTML email template created
3. **WhatsApp Integration** - Floating WhatsApp button added to all pages
4. **API Endpoint** - Backend code created in `/api/send-email.ts`

## 📧 Email Service Setup (Choose One Option)

### **Option 1: Resend (Recommended - Easiest)**

Resend is a modern email API that's easy to set up and has a generous free tier.

#### Steps:
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your domain OR use their free sending domain for testing
3. Get your API key from the dashboard
4. Add to your environment variables:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```
5. The API is already configured in `/api/send-email.ts`

**Free Tier**: 3,000 emails/month, 100 emails/day

---

### **Option 2: SendGrid**

#### Steps:
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Replace the fetch code in `/api/send-email.ts`:

```typescript
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
  },
  body: JSON.stringify({
    personalizations: [{
      to: [{ email: 'sanghapalpandit@gmail.com' }],
      subject: `New Contact Form Submission from ${name}`,
    }],
    from: { email: 'website@gurupaintingservices.in' },
    reply_to: { email: email },
    content: [{
      type: 'text/html',
      value: emailHTML,
    }],
  }),
});
```

4. Add environment variable:
   ```bash
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

**Free Tier**: 100 emails/day forever

---

### **Option 3: Nodemailer with Gmail**

If you want to use Gmail SMTP:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
4. Replace the code in `/api/send-email.ts`:

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'sanghapalpandit@gmail.com',
  replyTo: email,
  subject: `New Contact Form Submission from ${name}`,
  html: emailHTML,
});
```

5. Add environment variables:
   ```bash
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   ```

---

## 🚀 Deployment Instructions

### **For Vercel Deployment:**

1. Create `vercel.json` in project root:
```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" }
  ]
}
```

2. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` (or your chosen service key)

3. Deploy:
```bash
vercel deploy
```

---

### **For Netlify Deployment:**

1. Create `netlify.toml` in project root:
```toml
[build]
  functions = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

2. Move `/api` folder to `/netlify/functions`

3. Add environment variables in Netlify dashboard

4. Deploy:
```bash
netlify deploy --prod
```

---

### **For Traditional Server (cPanel/VPS):**

1. Set up a PHP mail handler as `/api/send-email.php`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['message' => 'All fields required']);
    exit;
}

$to = 'sanghapalpandit@gmail.com';
$subject = "New Contact Form Submission from $name";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: website@gurupaintingservices.in\r\n";
$headers .= "Reply-To: $email\r\n";

$emailBody = "<!-- Your HTML email template here -->";

if (mail($to, $subject, $emailBody, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send']);
}
?>
```

2. Update the fetch URL in `ContactPage.tsx`:
```typescript
const response = await fetch('/api/send-email.php', {
  // ... rest of the code
});
```

---

## 🧪 Testing

1. **Local Testing**: Use a service like [Mailtrap](https://mailtrap.io) to test emails without sending real ones

2. **Production Testing**: After deployment, fill out the contact form and check:
   - Email arrives at sanghapalpandit@gmail.com
   - Email formatting looks good
   - Reply-to address is set to customer's email

---

## 📱 WhatsApp Integration

The WhatsApp button is already configured with:
- **Phone Number**: +91 8668415858
- **Pre-filled Message**: "Hi, I am interested in your painting services."
- **Floating Button**: Bottom-right corner on all pages

### To Change WhatsApp Number:
Edit in `/src/app/components/Layout.tsx` and `/src/app/pages/ContactPage.tsx`:
```typescript
const whatsappNumber = '918668415858'; // Change this
```

---

## 🔒 Security Tips

1. **Never commit API keys** to Git
2. Always use environment variables
3. Add rate limiting to prevent spam
4. Validate email addresses server-side
5. Add CAPTCHA for production (optional)

---

## 🆘 Troubleshooting

**Email not sending?**
- Check API key is correct
- Verify environment variables are set
- Check server logs for errors
- Ensure email template HTML is valid

**Gmail blocking emails?**
- Use App Passwords, not regular password
- Check Gmail's "Less secure app access" settings
- Consider using a dedicated email service instead

**CORS errors?**
- Add proper CORS headers in API route
- Ensure API endpoint matches fetch URL

---

## 📞 Support

For any issues with email setup, contact your hosting provider or the email service you chose.

**Email Service Support:**
- Resend: [resend.com/docs](https://resend.com/docs)
- SendGrid: [sendgrid.com/docs](https://sendgrid.com/docs)
- Nodemailer: [nodemailer.com](https://nodemailer.com)
