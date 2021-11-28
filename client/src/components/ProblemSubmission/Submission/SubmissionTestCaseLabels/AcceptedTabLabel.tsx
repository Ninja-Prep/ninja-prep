import React from 'react';

import withTestLabel from '../../containers/HOC/withTestLabel';
import {AcceptedIcon} from './styled';

function AcceptedTabLabel(): JSX.Element {
  return <AcceptedIcon />;
}

export default withTestLabel(AcceptedTabLabel);
