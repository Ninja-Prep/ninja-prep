import React from 'react';

import {Container} from 'react-bootstrap';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {
  MEET_THE_TEAM_HEADER_TITLE,
  MEET_THE_TEAM_HEADER_DESCRIPTION,
} from 'utils/stringIds.json';

import {CenteredText, HeaderTitle, HeaderDescription} from './styled';

function MeetTheTeamHeaderMobile(): JSX.Element {
  return (
    <Container>
      <CenteredText>
        <DarkNinjaPrepLogo width={325} height={175} />
        <HeaderTitle>{MEET_THE_TEAM_HEADER_TITLE}</HeaderTitle>
        <HeaderDescription>
          {MEET_THE_TEAM_HEADER_DESCRIPTION}
        </HeaderDescription>
      </CenteredText>
    </Container>
  );
}

export default MeetTheTeamHeaderMobile;
