// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
import Stripe from 'stripe'
import express from 'express'

const stripe = new Stripe(process.env.STRIPE_TEST_KEY, {
    apiVersion: '2020-08-27'
})
const Router = express.Router()

Router.post('/create-checkout-session', async (_req, res) => {
    // See https://stripe.com/docs/api/checkout/sessions/create
    // for additional parameters to pass.
    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price: 'price_1IFSi9D8LTDC9rJz3fLG14zX',
                    // For metered billing, do not pass quantity
                    quantity: 1
                }
            ],
            // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
            // the actual Session ID is returned in the query parameter when your customer
            // is redirected to the success page.
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })
        res.send({
            sessionId: session.id
        })
    } catch (e) {
        console.log('ERROR', e)
        res.status(400)
        res.send({
            error: {
                message: e.message
            }
        })
    }
})

export default Router
