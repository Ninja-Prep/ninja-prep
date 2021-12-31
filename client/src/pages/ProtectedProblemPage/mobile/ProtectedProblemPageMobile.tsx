import React from 'react';

import {SubmissionWrapper} from './styled';

import 'react-reflex/styles.css';
import NavigationBarMobileContainer from 'components/Navigation/containers/NavigationBarMobileContainer/NavigationBarMobileContainer';
import LockedPremiumProblemSubmissionMobile from 'components/ProblemSubmission/mobile/LockedPremiumProblemSubmission/LockedPremiumProblemSubmissionMobile';

interface Props {
  title: string;
}

function ProtectedProblemSubmissionPageMobile(props: Props) {
  return (
    <div>
      <NavigationBarMobileContainer />
      <LockedPremiumProblemSubmissionMobile />
    </div>
  );
}

export default ProtectedProblemSubmissionPageMobile;
