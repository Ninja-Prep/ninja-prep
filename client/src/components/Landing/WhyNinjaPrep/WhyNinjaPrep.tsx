import React from 'react';

import * as Styled from './styled';
import {START_CODING} from 'utils/stringIds.json';
import {LightBlueLinkButton} from 'uiLibrary/Buttons';

function WhyNinjaPrep(): JSX.Element {
  return (
    <Styled.BackgroundContainer>
      <Styled.WhyNinjaPrepContainer>
        <Styled.SubHeading>Why NinjaPrep?</Styled.SubHeading>
        <Styled.SubText>We empower developers to take their careers to the next level with a strong and simple platform</Styled.SubText>
        <LightBlueLinkButton to="challenges" text={START_CODING} icon={<Styled.NavigateNext />} />
      </Styled.WhyNinjaPrepContainer>
    </Styled.BackgroundContainer>
  );
}

export default WhyNinjaPrep;
