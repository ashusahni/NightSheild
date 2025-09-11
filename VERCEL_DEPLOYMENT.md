# Vercel Deployment Guide for NightShield

## 🚀 Email Integration Setup

Your NightShield contact form is now ready for Vercel deployment with professional email handling using Resend.

### 1. Resend Setup

1. **Create a Resend Account**: Visit [resend.com](https://resend.com) and sign up
2. **Get API Key**: Go to [resend.com/api-keys](https://resend.com/api-keys) and create a new API key
3. **Add Domain** (Recommended): Add your domain `nightshield.ai` to Resend for better deliverability

### 2. Environment Variables

Add these environment variables to your Vercel project:

#### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=contact@nightshield.ai
NOREPLY_EMAIL=noreply@nightshield.ai
```

#### For Local Development:
Create a `.env.local` file in your project root:

```bash
# Resend API Key for email sending
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
CONTACT_EMAIL=contact@nightshield.ai
NOREPLY_EMAIL=noreply@nightshield.ai
```

### 3. Deploy to Vercel

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Deploy**: Vercel will automatically deploy your Next.js app
3. **Environment Variables**: Add the environment variables in Vercel dashboard
4. **Domain Setup**: Configure your custom domain `nightshield.ai`

### 4. Features Included

✅ **Professional Email Templates**: Beautiful HTML emails with NightShield branding  
✅ **Auto-Reply**: Users receive immediate confirmation emails  
✅ **Team Notifications**: You get notified of all contact form submissions  
✅ **GDPR Compliant**: Consent tracking and data handling  
✅ **Error Handling**: Proper error messages for users  
✅ **Mobile Responsive**: Works perfectly on all devices  

### 5. Email Templates

The system sends two emails for each form submission:

1. **Team Notification Email** (to contact@nightshield.ai):
   - Professional dark theme design
   - All form data clearly formatted
   - GDPR consent confirmation
   - Timestamp and metadata

2. **Auto-Reply Email** (to the user):
   - Branded thank you message
   - 24-hour response promise
   - Links to demo booking and contact info
   - Professional NightShield branding

### 6. Testing

After deployment, test your contact form:
1. Fill out the form on your website
2. Check that you receive the team notification email
3. Verify the user receives the auto-reply
4. Check Vercel function logs for any errors

### 7. Monitoring

- **Vercel Functions**: Monitor your API endpoint in Vercel dashboard
- **Resend Analytics**: Track email delivery and engagement
- **Error Logs**: Check Vercel function logs for any issues

### 8. Optional Enhancements

Consider adding these features later:
- Database storage for form submissions
- Spam protection (reCAPTCHA)
- Rate limiting
- CRM integration
- Email analytics tracking

## 🎉 Ready to Deploy!

Your NightShield contact form is now production-ready with professional email handling. Simply add your Resend API key to Vercel and deploy!
