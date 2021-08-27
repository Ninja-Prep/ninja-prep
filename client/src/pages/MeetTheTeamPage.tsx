import React from 'react';

import Responsiveness from 'utils/hocs/Responsiveness';

import MeetTheTeamDesktop from './MeetTheTeam/MeetTheTeamDesktop';
import MeetTheTeamMobile from './MeetTheTeam/MeetTheTeamMobile';

function MeetTheTeamPage(): JSX.Element {
  const desktop = <MeetTheTeamDesktop />;
  const mobile = <MeetTheTeamMobile />;

  return <Responsiveness desktop={desktop} mobile={mobile} />;
}

export default MeetTheTeamPage;
