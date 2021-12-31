import styled from 'styled-components';
import Box from '@mui/material/Box';
import * as CoreUI from 'uiLibrary/CoreUI';

export const CenterContent = styled(Box)`
  text-align: center !important;
  padding: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 550;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #24d1f3;
  box-shadow: 0 5px 50px rgba(36, 209, 243, 20%);
  width: 90vw;

`;

export const LoginText = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  margin: 32px 0 16px 0;
`;

export const ModalSubtext = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  color: #595959;
  margin-bottom: 32px;
`;

export const GoogleButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  width: 390px;
  background-color: #db2828;
  margin-bottom: 24px;
  :hover {
    background-color: #bf0000;
  }
`;

export const FacebookButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  width: 390px;
  background-color: #3b5998;

  color: white !important;
  margin-bottom: 24px;
  :hover {
    background-color: #192e92;
  }
`;

export const GitHubButton = styled.a`
  ${CoreUI.SOCIAL_MEDIA_BUTTON}
  width: 390px;
  color: white !important;
  background-color: #1b1c1d;
  > svg {
    float: left;
  }
`;

export const SocialMediaButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
