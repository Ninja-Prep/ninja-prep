import React from 'react';

import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {
  MEET_THE_TEAM_HEADER_TITLE,
  MEET_THE_TEAM_HEADER_DESCRIPTION_1,
  MEET_THE_TEAM_HEADER_DESCRIPTION_2,
} from 'utils/stringIds.json';

import {HeaderContainer, HeaderTitle, Description} from './styled';

function MeetTheTeamHeaderDesktop(): JSX.Element {
  return (
    <HeaderContainer>
      <DarkNinjaPrepLogo width={500} height={150} />
      <HeaderTitle>{MEET_THE_TEAM_HEADER_TITLE}</HeaderTitle>
      <Description>{MEET_THE_TEAM_HEADER_DESCRIPTION_1}</Description>
      <Description>{MEET_THE_TEAM_HEADER_DESCRIPTION_2}</Description>
    </HeaderContainer>
  );
}

export default MeetTheTeamHeaderDesktop;
