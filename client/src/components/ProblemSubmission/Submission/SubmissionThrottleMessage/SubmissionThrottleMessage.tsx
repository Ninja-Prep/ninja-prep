import * as React from 'react';
import * as Styled from './styled';

export function SubmissionThrottleMessage() {
  return (
    <Styled.MessageContainer p={2}>
      <Styled.AlertIcon />
      Please wait before attempting to submit your code again.
    </Styled.MessageContainer>
  );
}
