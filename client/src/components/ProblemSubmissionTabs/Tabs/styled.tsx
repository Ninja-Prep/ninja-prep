import styled from 'styled-components';
import Tab from '@mui/material/Tab';

import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  '&.mui-selected': {
    outline: 'none';
  }
`;

export const TabButton = styled(Tab)`
  &.MuiTab-root {
    background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
  }
  &.MuiTab-root.Mui-selected {
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  }

  :focus {
    outline: none;
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  }
`;

export const IndicatorColor = CoreUI.DEFAULT_BLACK_TEXT_COLOR;
