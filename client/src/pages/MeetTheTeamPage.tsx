import React from 'react';

import Responsiveness from 'utils/hocs/Responsiveness';

import MeetTheTeamDesktop from './desktop/MeetTheTeamDesktop';
import MeetTheTeamMobile from './mobile/MeetTheTeamMobile';

function MeetTheTeamPage(): JSX.Element {
  const desktop = <MeetTheTeamDesktop />;
  const mobile = <MeetTheTeamMobile />;
  return <Responsiveness desktop={desktop} mobile={mobile} />;
}

export default MeetTheTeamPage;
