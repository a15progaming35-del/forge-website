import { redirect } from 'next/navigation';

export async function POST(request: Request) {
  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const { email } = await request.json();

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/pricing`,
      customer_email: email || undefined,
      billing_address_collection: 'required',
      tax_id_collection: {
        enabled: true,
      },
    });

    return Response.json({ url: session.url }, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
