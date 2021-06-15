import React from 'react';

import {Desktop, Mobile} from '../../utils/DeviceSizes';
import MeetTheTeamDesktop from './MeetTheTeamDesktop';
import MeetTheTeamMobile from './MeetTheTeamMobile';

const MeetTheTeamComponent = (): JSX.Element => (
  <div>
    <Desktop>
      <MeetTheTeamDesktop />
    </Desktop>
    <Mobile>
      <MeetTheTeamMobile />
    </Mobile>
  </div>
);

export default MeetTheTeamComponent;
