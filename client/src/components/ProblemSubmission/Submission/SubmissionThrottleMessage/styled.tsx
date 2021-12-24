import {Box} from '@mui/material';
import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export const MessageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${CoreUI.OPEN_SANS};
  background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
  ${CoreUI.SIMPLE_BORDER_BOTTOM};
`;

export const AlertIcon = styled(ErrorOutlineOutlinedIcon)`
  margin-right: 10px;
  transform: scale(1.3);
  color: ${CoreUI.PREMIUM_COLOR};
`;
