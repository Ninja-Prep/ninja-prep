import React, {Fragment} from 'react';

import {LockedIcon, AcceptedIcon} from './styled';

interface Props {
  isFreeProblem: boolean;
  isCompletedProblem?: boolean;
  isPremiumUser?: boolean;
}

const QuestionCardIcon = (props: Props): JSX.Element => {
  if (props.isCompletedProblem) {
    return <AcceptedIcon />;
  } else if (props.isPremiumUser || props.isFreeProblem) {
    return <Fragment />;
  } else {
    return <LockedIcon />;
  }
};

export default QuestionCardIcon;
