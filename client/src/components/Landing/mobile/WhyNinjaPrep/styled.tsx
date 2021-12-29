import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const NavigateNext = styled(NavigateNextIcon)`
  transform: scale(1.5);
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: #f8fcff;
  margin-left: calc(-50vw + 50%);
`;

export const WhyNinjaPrepContainer = styled.div`
  ${CoreUI.STANDARDIZED_MOBILE_PAGE_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${CoreUI.MEDIUM_SPACING};
`;

export const SubHeading = styled.p`
  text-align: center;
  margin: 0;
  padding: ${CoreUI.MEDIUM_SPACING} 0;
  ${CoreUI.ROBOTO_BOLD_FONT}
`;

export const SubText = styled.p`
  text-align: center;
  padding-bottom: ${CoreUI.MEDIUM_SPACING};
  ${CoreUI.ROBOTO_BOLD_FONT}
  color: #1DA4BF;
  margin: 0;
`;
