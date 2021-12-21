import * as CoreUI from 'uiLibrary/CoreUI';
import styled from 'styled-components';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Tab} from '@mui/material';

export const AcceptedIcon = styled(CheckRoundedIcon)`
  color: green;
`;

export const WrongAnswerIcon = styled(CloseRoundedIcon)`
  color: red;
`;

export const TabLabel = styled(Tab)`
  &.MuiTabs-root {
    background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
  }
  &.MuiTab-root {
    background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
  }
  &.MuiTab-root.Mui-selected {
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
    font-weight: bold;
  }

  :focus {
    outline: none;
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  }
`;

export const IndicatorColor = CoreUI.DEFAULT_BLACK_TEXT_COLOR;
