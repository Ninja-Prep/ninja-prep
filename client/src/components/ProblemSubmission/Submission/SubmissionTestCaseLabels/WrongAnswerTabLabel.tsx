import React from 'react';

import withTestLabel from '../../containers/HOC/withTestLabel';
import {WrongAnswerIcon} from './styled';

function WrongAnswerTabLabel(): JSX.Element {
  return <WrongAnswerIcon />;
}

export default withTestLabel(WrongAnswerTabLabel);
