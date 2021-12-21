import Button from '@mui/material/Button';
import styled from 'styled-components';
import {LIGHT_BLUE, MEDIUM_BLUE} from 'uiLibrary/CoreUI';

export const ResetCode = styled(Button)`
  &.MuiButton-root {
    color: white;
    background-color: ${LIGHT_BLUE};
    border-style: none;
    color: #ffffff;
    align-self: center;
  }
  &.muibutton-root: hover {
    color: white;
    background-color: ${MEDIUM_BLUE};
    border-style: none;
    color: #ffffff;
    align-self: center;
  }
`;

export const ResetCodeContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Bold = styled.div`
  font-weight: bold;
  padding: 0 8px;
`;
