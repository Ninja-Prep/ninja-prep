import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const ButtonContent = styled.div``;

export const RightChevron = styled(NavigateNextIcon)`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  color: white;
  margin-right: 10px;
  transform: scale(1.5);
`;

export const LoginHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${CoreUI.EXTRA_LARGE_SPACING};
`;

export const LoginHeaderLargeText = styled.span`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.5px;
  line-height: 79px;
  width: 100%;
`;

export const LoginHeaderBodyText = styled.p`
  font-family: ${CoreUI.OPEN_SANS};
  margin: 32px 0px;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 27px;
  color: ${CoreUI.BODY_TEXT_COLOR};
`;

export const StartLearningForFree = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  text-align: center;
`;

export const FlexSizing = styled.div`
  flex: 1;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${CoreUI.MEDIUM_SPACING} 0;
`;

export const GoogleButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  background-color: #DB2828;
  max-width: 340px;
  width: 100%;
  margin-bottom: 16px;
  :hover {
    background-color: #bf0000;
  }
`;

export const FacebookButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  background-color: #3B5998;
  color: white !important;
  max-width: 340px;
  width: 100%;
  margin-bottom: 16px;
  :hover {
    background-color: #192e92;
  }
`;

export const GitHubButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  color: white !important;
  max-width: 340px;
  width: 100%;
  background-color: #1b1c1d;
  > svg {
    float: left;
  }
`;

export const FreeCodingButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${CoreUI.MEDIUM_SPACING};
`;
