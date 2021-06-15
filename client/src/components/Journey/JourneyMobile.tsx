import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import {JourneyCardProps} from './JourneyCardInterface';
import {JourneyList} from './JourneyList';
import {JOURNEY_TITLE, JOURNEY_DESCRIPTION} from './JourneyStringIds';
import './journey.css';

/**
 *
 */
function JourneyMobile() {
  /**
   *
   */
  function JourneyCard(props: JourneyCardProps) {
    return (
      <Col className="py-5">
        <Row className="mx-auto mb-2">
          <img className="mx-auto img-fluid w-50" src={props.imagePath} />
        </Row>
        <Row>
          <h4 className="font-weight-bold mx-auto pb-2 text-center">
            {props.title}
          </h4>
          <p className="lead text-secondary text-center">{props.description}</p>
        </Row>
      </Col>
    );
  }
  return (
    <div className="pb-5 pt-4">
      <Container>
        <div className="text-center pb-4">
          <h3 className="font-weight-bold pb-2">{JOURNEY_TITLE}</h3>
          <p className="lead">{JOURNEY_DESCRIPTION}</p>
        </div>
        {JourneyList.map((card, i) => (
          <JourneyCard
            key={i}
            imagePath={card.imagePath}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </div>
  );
}

export default JourneyMobile;
