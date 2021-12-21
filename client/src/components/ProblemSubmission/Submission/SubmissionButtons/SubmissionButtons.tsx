import React from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {SUBMIT_CODE} from 'utils/stringIds.json';

import {SubmitCodeButtonColor} from './styled';

interface Props {
  submitHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function SubmissionButtons({submitHandler}: Props): JSX.Element {
  return (
    <SubmitCodeButtonColor variant="contained" onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => submitHandler(e)}>
      <PlayArrowIcon />
      <b>{SUBMIT_CODE}</b>
    </SubmitCodeButtonColor>
  );
}

export default SubmissionButtons;
