import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import {JourneyCardProps} from './JourneyCardInterface';
import {JourneyList} from './JourneyList';
import {JOURNEY_TITLE, JOURNEY_DESCRIPTION} from './JourneyStringIds';
import './journey.css';

function JourneyCard(props: JourneyCardProps) {
  return (
    <Row className={' my-5 py-5 blob-bg ' + props.backgroundImage}>
      <Col className="pr-5 ">
        <img className="float-right img-fluid" src={props.imagePath} />
      </Col>
      <Col className="my-auto pl-5 ">
        <h2 className="step-number m-0">{props.stepNumber}</h2>
        <h1 className="font-weight-bold my-3">{props.title}</h1>
        <h2 className="w-80 font-weight-light text-secondary m-0">{props.description}</h2>
      </Col>
    </Row>
  );
}


function JourneyDesktop() {
  return (
    <div className="py-5">
      <div className="text-center pb-4">
          <h1 className="font-weight-bold pb-2 display-4">{JOURNEY_TITLE}</h1>
          <h2 className="font-weight-light">{JOURNEY_DESCRIPTION}</h2>
        </div>
      <Container>
        {JourneyList.map((card, i) => (
          <JourneyCard
            key={i}
            backgroundImage={card.backgroundImage}
            imagePath={card.imagePath}
            stepNumber={card.stepNumber}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </div>
  );
}

export default JourneyDesktop;
