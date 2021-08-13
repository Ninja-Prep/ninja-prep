import React from 'react';

import {JourneyCardProps} from './JourneyCardInterface';
import {JourneyList} from './JourneyList';
import {JOURNEY_TITLE, JOURNEY_DESCRIPTION} from 'utils/stringIds.json';
import './journey.css';

import {
  JourneyCardLeftColumn,
  JourneyCardRightColumn,
  JourneyCardBackground,
  JourneyCardImage,
  JourneyCardStepNumber,
  JourneyCardTitle,
  JourneyCardDescription,
  JourneyContainer,
  JourneyHeadingContainer,
  JourneyHeading,
  JourneySubtitle,
} from './styled';

function JourneyCard(props: JourneyCardProps) {
  return (
    <JourneyCardBackground className={props.backgroundImage}>
      <JourneyCardLeftColumn>
        <JourneyCardImage src={props.imagePath} />
      </JourneyCardLeftColumn>
      <JourneyCardRightColumn>
        <JourneyCardStepNumber>{props.stepNumber}</JourneyCardStepNumber>
        <JourneyCardTitle>{props.title}</JourneyCardTitle>
        <JourneyCardDescription>{props.description}</JourneyCardDescription>
      </JourneyCardRightColumn>
    </JourneyCardBackground>
  );
}

function JourneyDesktop() {
  return (
    <JourneyContainer>
      <JourneyHeadingContainer>
        <JourneyHeading>{JOURNEY_TITLE}</JourneyHeading>
        <JourneySubtitle>{JOURNEY_DESCRIPTION}</JourneySubtitle>
      </JourneyHeadingContainer>
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
    </JourneyContainer>
  );
}

export default JourneyDesktop;
