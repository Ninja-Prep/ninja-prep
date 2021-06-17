import React from 'react';

import {biographies} from '../biographies';
import {
  Container,
  StyledRow,
  VerticalCenteredCol,
  Name,
  Description,
} from './styled';

const MeetTheTeamInfoDesktop = (): JSX.Element => {
  return (
    <Container>
      {biographies.map((_, index) => {
        if (index % 2) {
          return (
            <StyledRow>
              <VerticalCenteredCol>{_.photo}</VerticalCenteredCol>
              <VerticalCenteredCol>
                <Name>{_.name}</Name>
                <Description>{_.description}</Description>
              </VerticalCenteredCol>
            </StyledRow>
          );
        } else {
          return (
            <StyledRow>
              <VerticalCenteredCol>
                <Name>{_.name}</Name>
                <Description>{_.description}</Description>
              </VerticalCenteredCol>
              <VerticalCenteredCol>{_.photo}</VerticalCenteredCol>
            </StyledRow>
          );
        }
      })}
    </Container>
  );
};

export default MeetTheTeamInfoDesktop;
