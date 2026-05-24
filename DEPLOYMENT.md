# Forge Website - Deployment Guide

## Prerequisites

Before deploying to production, complete the following setup:

### 1. Stripe Setup (Required for Payments)
- Create a Stripe account at https://stripe.com
- Create a Product called "Forge Subscription"
- Create a recurring Price of $11 USD/month
- Copy your Price ID (starts with `price_`)
- Get your API keys from Developers > API Keys

### 2. GitHub Repository
- Push this repo to GitHub (or GitLab/Vercel)
- You'll need the repo URL during Vercel deployment

### 3. Domain (Optional but Recommended)
- Get a domain (forge.app, getforge.app, etc.)
- Point it to Vercel nameservers or use Vercel's domain registration

## Deploy to Vercel

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/yourusername/forge-website.git
git branch -M main
git push -u origin main
```

### Step 2: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Create Team" (optional) or proceed with personal account

### Step 3: Import Project
1. Click "Add New Project"
2. Select "Import Git Repository"
3. Find your forge-website repository
4. Click "Import"

### Step 4: Configure Environment Variables
1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add the following variables:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET
NEXT_PUBLIC_STRIPE_PRICE_ID=price_YOUR_PRICE_ID
NEXT_PUBLIC_BASE_URL=https://forge.app
```

Replace with your actual Stripe keys from Step 1.

### Step 5: Deploy
1. Click "Deploy"
2. Wait for deployment to complete (usually 2-3 minutes)
3. Your site is now live at the Vercel URL (e.g., forge-website.vercel.app)

## Post-Deployment

### 1. Add Custom Domain
1. Go to "Settings" → "Domains"
2. Add your custom domain (forge.app)
3. Follow Vercel's instructions to update DNS or add nameservers

### 2. Enable Vercel Analytics
- Analytics automatically enabled in Vercel Dashboard
- View insights at https://vercel.com/dashboard

### 3. Update Stripe Webhook
```bash
# After getting your Vercel deployment URL:
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: https://yourdomain.com/api/webhooks/stripe
3. Select events: customer.subscription.deleted, invoice.payment_failed
4. Copy signing secret and add to .env.local: STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. Configure Email for Refunds
Update the refund email in the codebase:
```
refund@forge.app -> your-actual-refund-email@domain.com
```

### 5. Enable Stripe Live Mode
1. In Stripe Dashboard, switch from "Test mode" to "Live mode"
2. Update .env with live keys (starting with pk_live_ and sk_live_)
3. Redeploy to Vercel

### 6. Set Up Transactional Emails
For license key delivery after purchase:
1. Use Stripe's built-in email capability, or
2. Integrate Resend/SendGrid:
   - Create account at Resend or SendGrid
   - Add API key to Vercel environment
   - Update `/api/checkout/route.ts` to send license keys

## Monitoring

### Check Deployment Status
- Vercel Dashboard → Deployments
- View logs for any build or runtime errors

### Monitor Errors
- Vercel Dashboard → Logs → Function Logs
- Check for checkout failures or API errors

### Track Sales
- Stripe Dashboard → Payments
- See all successful subscriptions and failed payments

## Troubleshooting

### Checkout Button Not Working
1. Check NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set
2. Verify Price ID is correct in Stripe Dashboard
3. Check browser console for JavaScript errors

### Emails Not Sending
1. Verify email service (Resend/SendGrid) API key
2. Check SMTP credentials if using self-hosted

### High Stripe Fees
1. Stripe charges 2.9% + 30¢ per transaction
2. Enable Stripe Tax for VAT/sales tax collection
3. Consider annual pricing tier ($99/year) to reduce fees

### SSL/Security Warnings
- Vercel automatically provides SSL certificates
- If issues persist, check domain DNS configuration

## Performance Optimization

### Image Optimization
- Images already optimized via Next.js Image component
- Vercel CDN automatically serves optimized versions

### Caching Strategy
- Homepage: revalidate every 3600 seconds (1 hour)
- Pricing: revalidate every 86400 seconds (1 day)
- Changelog: revalidate every 600 seconds (10 minutes)

### Database (if added)
- Keep all data queries serverless-friendly
- Consider Vercel KV for caching

## Security Checklist

- [ ] Stripe keys are environment variables (not in code)
- [ ] NEXT_PUBLIC keys only have public permissions
- [ ] SSL/TLS enabled (automatic with Vercel)
- [ ] CORS headers configured if needed
- [ ] Rate limiting enabled for API routes
- [ ] Webhook signatures verified from Stripe
- [ ] Password reset emails configured
- [ ] PII not logged or cached

## Next Steps After Launch

1. **Monitor Analytics**
   - Track pageviews, conversions, bounce rates
   - Identify most popular features

2. **Customer Support**
   - Set up support email (support@forge.app)
   - Respond to refund requests within 48 hours
   - Monitor Discord for community feedback

3. **Marketing**
   - Update social media links in footer
   - Submit to product launch sites (ProductHunt, etc.)
   - Post changelog updates regularly

4. **Iterate**
   - Collect customer feedback
   - A/B test pricing and copy
   - Improve based on analytics

## Support

For Vercel issues: https://vercel.com/support
For Stripe issues: https://support.stripe.com
For Next.js: https://nextjs.org/docs
