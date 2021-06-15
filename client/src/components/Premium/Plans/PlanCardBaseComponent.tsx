import React from 'react';

import {Stripe} from '@stripe/stripe-js';
import Axios from 'axios';
import {Card, Row, Col, Button} from 'react-bootstrap';

import {SUBSCRIBE_BUTTON} from './PlansStringIds';

export interface Plan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
}

interface PlanCards {
  plans: Array<Plan>;
}

interface StripeInterface extends Plan {
  stripe: Stripe | null;
  url: string;
}

export const PLAN_A: Plan = {
  title: 'Plan A',
  cost: '$35',
  description: 'Access to guided and convenient features, all in one platform.',
  backgroundColor: 'plan-a',
};
export const PLAN_B = {
  title: 'Plan B',
  cost: '$35',
  description: 'Access to guided and convenient features, all in one platform.',
  backgroundColor: 'plan-b',
};
export const PLAN_C = {
  title: 'Plan C',
  cost: '$35',
  description: 'Access to guided and convenient features, all in one platform.',
  backgroundColor: 'plan-c',
};

export const PlanCardsList: PlanCards = {
  plans: [PLAN_A, PLAN_B, PLAN_C],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export const RedirectToCheckoutForm = (
  stripe: Stripe | null,
  urlString: string,
) => {
  Axios({
    method: 'POST',
    url: urlString,
  }).then((res) => {
    stripe?.redirectToCheckout({
      sessionId: res.data.sessionId,
    });
  });
};

/**
 *
 */
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
          onClick={() => RedirectToCheckoutForm(props.stripe, props.url)}
          variant="outline-secondary"
        >
          <p className="lead">{SUBSCRIBE_BUTTON}</p>
        </Button>
      </div>
    </Card>
  );
}
