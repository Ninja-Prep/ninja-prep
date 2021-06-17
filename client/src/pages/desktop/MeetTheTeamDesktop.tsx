import React from 'react';

import MeetTheTeamHeaderDesktop from 'components/MeetTheTeam/MeetTheTeamHeader/desktop/MeetTheTeamHeaderDesktop';
import MeetTheTeamInfoDesktop from 'components/MeetTheTeam/MeetTheTeamInfo/desktop/MeetTheTeamInfoDesktop';

function MeetTheTeamDesktop(): JSX.Element {
  return (
    <div>
      <MeetTheTeamHeaderDesktop />
      <MeetTheTeamInfoDesktop />
    </div>
  );
}

export default MeetTheTeamDesktop;
