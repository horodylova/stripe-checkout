import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { payment_intent_id, sessionId, amount, reason } = await request.json();
    
    let paymentIntentId;
    
    if (payment_intent_id) {
      paymentIntentId = payment_intent_id;
    } else if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (!session.payment_intent) {
        return Response.json({ error: 'Payment not completed yet' }, { status: 400 });
      }
      paymentIntentId = session.payment_intent;
    } else {
      return Response.json({ error: 'Either payment_intent_id or sessionId is required' }, { status: 400 });
    }
    
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : undefined,
      reason: reason || 'requested_by_customer'
    });
    
    return Response.json({ success: true, refund });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}