import React, {Fragment} from 'react';

import {LockedIcon, AcceptedIcon, FreeUnlockedIcon} from './styled';

interface Props {
  isFreeProblem: boolean;
  isCompletedProblem?: boolean;
  isPremiumUser?: boolean;
}

const QuestionCardIcon = (props: Props): JSX.Element => {
  if (props.isCompletedProblem) {
    return <AcceptedIcon />;
  } else if (props.isPremiumUser) {
    return <Fragment />;
  } else if (props.isFreeProblem) {
    return <FreeUnlockedIcon />;
  } else {
    return <LockedIcon />;
  }
};

export default QuestionCardIcon;
