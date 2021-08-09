import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';



import {BenefitsCardProps} from './BenefitsBaseComponent';
import {BenefitsList} from './BenefitsList';
import {BENEFIT_TITLE, BENEFIT_DESCRIPTION} from './BenefitsStringIds'

import {BenefitsBackground, BenefitsContainer} from './styled';


function BenefitsMobile() {
 
  function BenefitsCard(props: BenefitsCardProps) {
    return (
      <Row className="pb-5 mb-3">
        <Col> 
          <div className="align-middle">
          {props.icon}
            <p className="d-inline lead align-middle m-0 pl-1">{props.title}</p>
          </div>
          <p className="text-secondary lead pt-2">{props.description}</p>
        </Col>
      </Row>
    );
  }
  return (
    <div className="px-3">
      <Container>
        <h2 className="display-5 pb-5 ">What's included</h2>
        {BenefitsList.map((card, i) => (
          <BenefitsCard
            key={i}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
        {/* <BenefitsCard
          title={BENEFIT_1.TITLE}
          description={BENEFIT_1.DESCRIPTION}
        />
        <BenefitsCard
          title={BENEFIT_2.TITLE}
          description={BENEFIT_2.DESCRIPTION}
        />

        <BenefitsCard
          title={BENEFIT_3.TITLE}
          description={BENEFIT_3.DESCRIPTION}
        />
        <BenefitsCard
          title={BENEFIT_4.TITLE}
          description={BENEFIT_4.DESCRIPTION}
        />

        <BenefitsCard
          title={BENEFIT_5.TITLE}
          description={BENEFIT_5.DESCRIPTION}
        />
        <BenefitsCard
          title={BENEFIT_6.TITLE}
          description={BENEFIT_6.DESCRIPTION}
        /> */}
      </Container>
    </div>
  );
}

export default BenefitsMobile;
