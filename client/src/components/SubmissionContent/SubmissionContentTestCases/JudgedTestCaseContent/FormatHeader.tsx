import React from 'react';

import {VerdictStatus} from 'utils/enums/userSubmission';

import {AcceptedStatus, ErrorStatus} from '../TestCaseContent/styled';

interface FormatHeaderProps {
  verdictStatus: string;
}

function FormatHeader(props: FormatHeaderProps): JSX.Element {
  if (props.verdictStatus === VerdictStatus.ACCEPTED) {
    return <AcceptedStatus>{props.verdictStatus}</AcceptedStatus>;
  } else if (props.verdictStatus) {
    return <ErrorStatus>{props.verdictStatus}</ErrorStatus>;
  }
  return <></>;
}

export default FormatHeader;
