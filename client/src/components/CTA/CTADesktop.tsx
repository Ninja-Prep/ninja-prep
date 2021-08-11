import React from 'react';
import {CTABackground, CTAContainer, CTATitle, CTAButton} from './styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {CTA_TITLE, CTA_BUTTON} from './CTAStringIds';

function CTADesktop(): JSX.Element {
  return (
    <CTABackground>
      <CTAContainer>
        <CTATitle>{CTA_TITLE}</CTATitle>
        <CTAButton>
          <h2>
            {CTA_BUTTON}
            <span>
              <NavigateNextIcon />
            </span>
          </h2>
        </CTAButton>
      </CTAContainer>
    </CTABackground>
  );
}

export default CTADesktop;
