import React from 'react'
import { HeaderComponent } from '../components/Header/HeaderComponent'
import { JourneyComponent } from '../components/Journey/JourneyComponent'
import { ShowcaseComponent } from '../components/Showcase/ShowcaseComponent'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Axios from 'axios'

function LandingPage() {
    return (
        <div>
            <StripeApp />
            <HeaderComponent />
            <JourneyComponent />
            <ShowcaseComponent />
        </div>
    )
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    'pk_test_51IFPpVD8LTDC9rJz1d5GqoT9IEMvFup6qRVsrORslhqUGRrDWbeGludlqWIDhW9RwrRRUCNlHZ5JCksGo7IOqD5q00JGnjPjA3'
)

const StripeApp = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        })

        if (!error) {
            console.log('Stripe 23 | token generated!', paymentMethod)
            //send token to backend here
            Axios({
                method: 'POST',
                url: `/payment/create-checkout-session/`,
            }).then((res) => {
                console.log(res)
                stripe
                    .redirectToCheckout({
                        sessionId: res.data.sessionId,
                    })
                    .then((res) => console.log('Payment ', res))
            })
        } else {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement />
            <button>Pay</button>
        </form>
    )
}

export default LandingPage
