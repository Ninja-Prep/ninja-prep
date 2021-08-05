import React from 'react';

import withTestLabel from '../hoc/withTestLabel';
import {AcceptedIcon} from '../styled';

function AcceptedTabLabel(): JSX.Element {
  return <AcceptedIcon />;
}

export default withTestLabel(AcceptedTabLabel);
