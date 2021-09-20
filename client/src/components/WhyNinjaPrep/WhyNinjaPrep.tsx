import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {LightBlueButton} from 'uiLibrary/CoreUI';
import {SubHeading, BackgroundContainer, WhyNinjaPrepContainer, SubText, StartCodingButton} from './styled';

function WhyNinjaPrep(): JSX.Element {
  return (
    <BackgroundContainer>
      <WhyNinjaPrepContainer>
        <SubHeading>Why NinjaPrep?</SubHeading>
        <SubText>We empower developers to take their careers to the next level with a strong and simple platform</SubText>
        <StartCodingButton>
          Start Coding <NavigateNextIcon />
        </StartCodingButton>
      </WhyNinjaPrepContainer>
    </BackgroundContainer>
  );
}

export default WhyNinjaPrep;
