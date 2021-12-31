import {Box} from '@mui/material';
import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const PageContainer = styled.div`
  margin-top: ${CoreUI.EXTRA_LARGE_SPACING};
  display: flex;
  align-items: center;
  flex-grow: 1;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
  justify-content: stretch;
  max-width: 90vw;
`;

export const ContentBox = styled(Box)`
  flex-grow: 1;
  ${CoreUI.SIMPLE_BORDER_BOTTOM};
  &.MuiBox-root {
    width: 100%;
  }
`;

export const SettingsHeader = styled.div`
  display: flex;
  align-items: center;
  ${CoreUI.ROBOTO_BOLD_FONT}
  flex-grow:1;
`;

export const Subtitle = styled.div`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
`;

export const Content = styled.div`
  ${CoreUI.OPEN_SANS_REGULAR}
  ${CoreUI.TRIMMED_ELLIPSES};
`;

export const Footer = styled.span`
  color: grey;
`;

export const Email = styled.a`
  color: #0c6991;
`;
