import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const LoginHeaderContainer = styled.div`
  padding: ${CoreUI.PAGE_PADDING} 0px;
  display: flex;
  justify-content: space-evenly;
`;

export const LoginHeaderLargeText = styled.span`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.5px;
  line-height: 79px;
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
`;

export const GoogleButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  background-color: #DB2828;
  margin-bottom: 16px;
  :hover {
    background-color: #bf0000;
  }
`;

export const FacebookButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  background-color: #3B5998;
  color: white !important;
  margin-bottom: 16px;
  :hover {
    background-color: #192e92;
  }
`;

export const GitHubButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  color: white !important;
  background-color: #1b1c1d;
  > svg {
    float: left;
  }
`;
