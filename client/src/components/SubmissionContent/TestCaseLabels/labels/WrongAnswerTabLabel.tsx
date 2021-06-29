import React from 'react';

import withTestLabel from '../hoc/withTestLabel';
import {WrongAnswerIcon} from '../styled';

function WrongAnswerTabLabel(): JSX.Element {
  return <WrongAnswerIcon />;
}

export default withTestLabel(WrongAnswerTabLabel);
