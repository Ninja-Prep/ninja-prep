import React from 'react'
import '../premium.css'
import { Container, CardDeck, Card, Row, Col, Button } from 'react-bootstrap'
import { SUBSCRIBE_BUTTON, PLAN_A, PLAN_B, PLAN_C } from './PlansStringIds'

import { useStripe } from '@stripe/react-stripe-js'
import Axios from 'axios'

function PlansDesktop() {
    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.

    function PlanCard(props) {
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
                    <Button onClick={RedirectToCheckoutForm} variant="outline-secondary">
                        <p className="lead">{SUBSCRIBE_BUTTON}</p>
                    </Button>
                </div>
            </Card>
        )
    }

    const stripe = useStripe()
    const RedirectToCheckoutForm = () => {
        Axios({
            method: 'POST',
            url: `/payment/create-checkout-session/`,
        }).then((res) => {
            stripe.redirectToCheckout({
                sessionId: res.data.sessionId,
            })
        })
    }

    return (
        <div className="pb-3">
            <h2 className="display-5 py-5 m-0 text-center">Our Plans</h2>
            <Container>
                <CardDeck className="m-0">
                    <PlanCard
                        backgroundColor={'plan-a'}
                        title={PLAN_A.TITLE}
                        cost={PLAN_A.COST}
                        description={PLAN_A.DESCRIPTION}
                    />
                    <PlanCard
                        backgroundColor={'plan-b'}
                        title={PLAN_B.TITLE}
                        cost={PLAN_B.COST}
                        description={PLAN_B.DESCRIPTION}
                    />
                    <PlanCard
                        backgroundColor={'plan-c'}
                        title={PLAN_C.TITLE}
                        cost={PLAN_C.COST}
                        description={PLAN_C.DESCRIPTION}
                    />
                </CardDeck>
            </Container>
        </div>
    )
}

export default PlansDesktop
export { default as PlansDesktop } from './PlansDesktop'
