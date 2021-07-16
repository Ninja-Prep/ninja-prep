import React from 'react';

import DoneIcon from '@material-ui/icons/Done';
import {Container, Row, Col} from 'react-bootstrap';

import {BenefitsCardProps} from './BenefitsBaseComponent';
import {
  BENEFIT_1,
  BENEFIT_2,
  BENEFIT_3,
  BENEFIT_4,
  BENEFIT_5,
  BENEFIT_6,
} from './BenefitsStringIds';

const styles = {
  doneIcon: {
    fontSize: 25,
    color: '#259AF3',
  },
};

/**
 *
 */
function BenefitsMobile() {
  /**
   *
   */
  function BenefitsCard(props: BenefitsCardProps) {
    return (
      <Row className="pb-5 mb-3">
        <Col>
          <div className="align-middle">
            <DoneIcon className="align-middle" style={styles.doneIcon} />
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

        <BenefitsCard
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
        />
      </Container>
    </div>
  );
}

export default BenefitsMobile;
