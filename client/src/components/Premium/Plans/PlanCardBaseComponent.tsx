import React from 'react'
import { Stripe } from '@stripe/stripe-js'
import Axios from 'axios'
import { SUBSCRIBE_BUTTON } from './PlansStringIds'
import { Card, Row, Col, Button } from 'react-bootstrap'

export interface Plan {
    mode: string
    priceKey: string
    title: string
    description: string
    cost: string
    backgroundColor: string
}

interface PlanCards {
    plans: Array<Plan>
}

interface StripeInterface extends Plan {
    stripe: Stripe | null
    url: string
}

export const PLAN_A: Plan = {
    mode: 'payment',
    priceKey: 'price_1IFSi9D8LTDC9rJz3fLG14zX',
    title: 'Plan A',
    cost: '$5',
    description: 'Access to guided and convenient features, all in one platform.',
    backgroundColor: 'plan-a'
}
export const PLAN_B = {
    mode: 'subscription',
    priceKey: 'price_1IjseOD8LTDC9rJz8vEdFJ2V',
    title: 'Plan B',
    cost: '$100',
    description: 'Access to guided and convenient features, all in one platform.',
    backgroundColor: 'plan-b'
}

export const PlanCardsList: PlanCards = {
    plans: [PLAN_A, PLAN_B]
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export const RedirectToCheckoutForm = (stripe: Stripe | null, urlString: string, priceKey: string, mode: string) => {
    Axios({
        method: 'POST',
        url: urlString,
        data: { priceKey: priceKey, mode: mode }
    }).then((res) => {
        stripe?.redirectToCheckout({
            sessionId: res.data.sessionId
        })
    })
}

export function PlanCard(props: StripeInterface) {
    return (
        <Card>
            <Card.Header className={' text-light py-5 px-5 ' + props.backgroundColor}>
                <Row>
                    <Col className="pr-0">
                        <h2>{props.title}</h2>
                    </Col>
                    <Col className="pl-0">
                        <h2 className="text-right">
                            {props.cost}
                            <span className="lead text-light">/mo</span>
                        </h2>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="px-5 py-4 lead">
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <div className="mx-auto pb-4">
                <Button
                    onClick={() => RedirectToCheckoutForm(props.stripe, props.url, props.priceKey, props.mode)}
                    variant="outline-secondary"
                >
                    <p className="lead">{SUBSCRIBE_BUTTON}</p>
                </Button>
            </div>
        </Card>
    )
}
