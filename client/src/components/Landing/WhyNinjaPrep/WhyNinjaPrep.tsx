import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {SubHeading, BackgroundContainer, WhyNinjaPrepContainer, SubText, StartCodingButton} from './styled';
import {WhiteLink} from 'uiLibrary/Links';

function WhyNinjaPrep(): JSX.Element {
  return (
    <BackgroundContainer>
      <WhyNinjaPrepContainer>
        <SubHeading>Why NinjaPrep?</SubHeading>
        <SubText>We empower developers to take their careers to the next level with a strong and simple platform</SubText>
        <WhiteLink to="/premium">
          <StartCodingButton>
            Start Coding <NavigateNextIcon />
          </StartCodingButton>
        </WhiteLink>
      </WhyNinjaPrepContainer>
    </BackgroundContainer>
  );
}

export default WhyNinjaPrep;
