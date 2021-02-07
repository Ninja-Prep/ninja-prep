// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51IFPpVD8LTDC9rJzDeLtZD2Ke1pDUGOKQw8txz1vgO4jhFQ0FdGzj41duEBDeUAYlcTrjKHSBqAuwY5uxYqjyGX700tD2iD0en"
);
const Router = require("express").Router();

Router.post("/create-checkout-session", async (req, res) => {
  console.log("In create-checkout-session");
  // const { priceId } = req.body;

  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1IFSi9D8LTDC9rJz3fLG14zX",
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      success_url: "https://ninjaprep.io?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ninjaprep.io/about",
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
