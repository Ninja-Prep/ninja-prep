// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require("stripe");
const {
  STRIPE_SUCCESS_URL,
  STRIPE_CANCEL_URL,
  STRIPE_TEST_KEY,
} = require("../../config/keys");
const stripe = Stripe(STRIPE_TEST_KEY);
const Router = require("express").Router();

Router.post("/create-checkout-session", async (req, res) => {
  console.log("In create-checkout-session");

  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
  try {
    const session = await stripe.checkout.sessions.create({
      mode: req.body.mode,
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceKey,
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      success_url: STRIPE_SUCCESS_URL,
      cancel_url: STRIPE_CANCEL_URL,
    });

    console.log(session);

    res.send({
      sessionId: session.id,
    });
  } catch (e) {
    console.log("ERROR", e);
    res.status(400);
    return res.send({
      error: {
        message: e.message,
      },
    });
  }
});

module.exports = Router;
