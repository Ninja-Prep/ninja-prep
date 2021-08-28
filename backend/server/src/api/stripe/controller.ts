import {Request, Response} from 'express';
import Stripe from 'stripe';
import User from '@models/User';

const stripe = new Stripe(process.env.STRIPE_TEST_KEY, {
  apiVersion: '2020-08-27',
});

export async function checkout(req: Request, res: Response): Promise<void> {
  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
  const userEmail = req.body.userEmail;
  const userId = req.session.user?.userId;
  if (userId) {
    try {
      const session = await stripe.checkout.sessions.create({
        customer_email: userEmail,
        client_reference_id: userId,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: req.body.stripePriceId,
            // For metered billing, do not pass quantity
            quantity: 1,
          },
        ],
        // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
        // the actual Session ID is returned in the query parameter when your customer
        // is redirected to the success page.
        success_url: process.env.STRIPE_SUCCESS_URL,
        cancel_url: process.env.STRIPE_CANCEL_URL,
      });
      res.send({
        sessionId: session.id,
      });
    } catch (e) {
      res.send({
        error: {
          message: e.message,
        },
      });
    }
  } else {
    res.status(400);
    res.send({
      error: {
        message: 'Invalid User Must login First',
      },
    });
  }
}

// Match the raw body to content type application/json
// If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
export async function webhook(req: Request, res: Response): Promise<void> {
  const event = req.body;
  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const paymentIntent = event.data.object;
      await addPremiumStatus(paymentIntent);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
}

async function addPremiumStatus(session: Stripe.Checkout.Session) {
  if (session.subscription && session.client_reference_id) {
    const subscriptionId = session.subscription as string;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    await User.findOneAndUpdate({userId: session.client_reference_id}, {premiumExpirationDate: new Date(subscription.current_period_end * 1000)}, {new: true});
  }
}

export async function getCheckoutSession(req: Request, res: Response): Promise<void> {
  const sessionId = req.body.checkoutSessionId;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.client_reference_id !== req.session.user?.userId) {
      res.status(400);
      res.send();
      return;
    }
    const subscriptionId = session.subscription as string;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const expirationDate = new Date(subscription.current_period_end * 1000);
    const formattedDate = expirationDate.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'});
    res.send({email: session.customer_email, expirationDate: formattedDate});
    return;
  } catch (err) {
    res.status(400);
    res.send();
    return;
  }
}
