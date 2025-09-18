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

Use Stripe test card: `4242 4242 4242 4242`

## Live Demo

[https://stripe-checkout-omega.vercel.app](https://stripe-checkout-omega.vercel.app)