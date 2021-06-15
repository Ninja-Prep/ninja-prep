import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import {JourneyCardProps} from './JourneyCardInterface';
import {JourneyList} from './JourneyList';
import {JOURNEY_TITLE, JOURNEY_DESCRIPTION} from './JourneyStringIds';
import './journey.css';

/**
 *
 */
function JourneyTablet() {
  /**
   *
   */
  function JourneyCard(props: JourneyCardProps) {
    return (
      <Row className="py-5">
        <Col className="pr-5">
          <img className="float-right img-fluid" src={props.imagePath} />
        </Col>
        <Col className="my-auto pl-5">
          <h4 className="font-weight-bold">{props.title}</h4>
          <p className="lead text-secondary">{props.description}</p>
        </Col>
      </Row>
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

export default JourneyTablet;
