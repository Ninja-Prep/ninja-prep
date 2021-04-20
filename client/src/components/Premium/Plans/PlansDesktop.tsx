import React from 'react'
import { Container, CardDeck } from 'react-bootstrap'
import { PlanCardsList, PlanCard } from './PlanCardBaseComponent'
import { useStripe } from '@stripe/react-stripe-js'
import { OUR_PLANS } from './PlansStringIds'

function PlansDesktop() {
    const stripe = useStripe()
    return (
        <div className="pb-3">
            <h2 className="display-5 py-5 m-0 text-center">{OUR_PLANS}</h2>
            <Container>
                <CardDeck className="m-0">
                    {PlanCardsList.plans.map((plan, key) => (
                        <PlanCard {...plan} stripe={stripe} key={key} url={'/payment/create-checkout-session/'} />
                    ))}
                </CardDeck>
            </Container>
        </div>
    )
}

export default PlansDesktop
