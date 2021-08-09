import React from 'react';
import {CTABackground, CTAContainer, CTATitle, CTAButton} from './styled';
import {Container, Button} from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function CTADesktop(): JSX.Element {
  return (
    <CTABackground>
      <CTAContainer>
        <CTATitle>
          NinjaPrep, the platform that offers everything you need to go from
          beginner to mastery
        </CTATitle>
        <CTAButton>
          <h2>
            START LEARNING <NavigateNextIcon />
          </h2>
        </CTAButton>
      </CTAContainer>
    </CTABackground>
  );
}

export default CTADesktop;
