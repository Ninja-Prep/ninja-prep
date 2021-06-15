import React from 'react';

import {useStripe} from '@stripe/react-stripe-js';
import {CardDeck} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

import {PlanCardsList, PlanCard} from './PlanCardBaseComponent';
import {OUR_PLANS} from './PlansStringIds';

/**
 *
 */
function PlansTablet() {
  const stripe = useStripe();
  return (
    <div className="pb-3 m-0 mx-5 px-5">
      <h2 className="display-5 py-5 m-0 text-center">{OUR_PLANS}</h2>
      <CardDeck>
        {PlanCardsList.plans.map((plan, key) => (
          <Row key={key} className="mx-auto container pb-5">
            <PlanCard
              {...plan}
              stripe={stripe}
              url={'/api/payment/create-checkout-session/'}
            />
          </Row>
        ))}
      </CardDeck>
    </div>
  );
}

export default PlansTablet;
