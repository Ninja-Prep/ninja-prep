import React from 'react'
import { Container, CardDeck } from 'react-bootstrap'
import { PlanCardsList, PlanCard } from './PlanCardBaseComponent'
import { useStripe } from '@stripe/react-stripe-js'
import { Row } from 'react-bootstrap'
import { OUR_PLANS } from './PlansStringIds'

function PlansMobile() {
    const stripe = useStripe()
    return (
        <div className="pb-3 m-0">
            <Container>
                <h2 className="display-5 py-5 m-0 text-center">{OUR_PLANS}</h2>
                <CardDeck>
                    {PlanCardsList.plans.map((plan, key) => (
                        <Row key={key} className="mx-auto container pb-5">
                            <PlanCard {...plan} stripe={stripe} url={'/payment/create-checkout-session/'} />
                        </Row>
                    ))}
                </CardDeck>
            </Container>
        </div>
    )
}

export default PlansMobile
