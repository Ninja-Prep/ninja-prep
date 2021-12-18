import React from 'react';

import * as Styled from './styled';
import ReplayIcon from '@mui/icons-material/Replay';
interface Props {
  onClick: () => void;
}

const CodeEditorResetCode = (props: Props): JSX.Element => {
  return (
    <Styled.ResetCode variant="contained" onClick={props.onClick}>
      <Styled.ResetCodeContent>
        <ReplayIcon />
        <Styled.Bold>Reset Code</Styled.Bold>
      </Styled.ResetCodeContent>
    </Styled.ResetCode>
  );
};

export default CodeEditorResetCode;
