# Stripe Checkout Integration

A Next.js application demonstrating Stripe payment processing with checkout sessions and refund functionality.

## Features

- **Payment Processing**: Secure checkout using Stripe Checkout Sessions
- **Refund System**: Process refunds with custom amounts and reasons
- **Webhook Integration**: Real-time payment status updates
- **Responsive Design**: Modern UI with hover effects and animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Payment**: Stripe API
- **Styling**: CSS Modules
- **Deployment**: Vercel

## API Endpoints

- `POST /api/checkout` - Create Stripe Checkout session
- `POST /api/webhook` - Handle Stripe webhook events
- `POST /api/refund` - Process payment refunds

## Pages

- `/` - Main page with payment and refund forms
- `/success` - Payment success confirmation
- `/refund-success` - Refund success confirmation

## Environment Variables

```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`
5. Configure Stripe webhook endpoint

## Testing

### Test Cards

Use these Stripe test cards for testing payments:

**Successful payments:**
- `4242 4242 4242 4242` - Visa (most common)
- `4000 0566 5566 5556` - Visa (debit)
- `5555 5555 5555 4444` - Mastercard
- `3782 822463 10005` - American Express
- `6011 1111 1111 1117` - Discover

**Declined payments:**
- `4000 0000 0000 0002` - Card declined
- `4000 0000 0000 9995` - Insufficient funds
- `4000 0000 0000 9987` - Lost card
- `4000 0000 0000 9979` - Stolen card

**3D Secure authentication:**
- `4000 0027 6000 3184` - Requires authentication

**International cards:**
- `4000 0000 0000 4954` - GB card
- `4000 0000 0000 1091` - CA card

**Use any future expiry date (e.g., 12/34) and any 3-digit CVC for testing.**

## Live Demo

[https://stripe-checkout-omega.vercel.app](https://stripe-checkout-omega.vercel.app)