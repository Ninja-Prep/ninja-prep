/*
Modal that appears when a user attempts to login
There is no login page, only a modal to log the user in
*/
import React from 'react';

import Modal from '@mui/material/Modal';
import {Fade} from '@mui/material';

import {FacebookIcon, GitHubIcon, GoogleIcon} from 'uiLibrary/SocialMediaIcons';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {SIGN_UP_LOGIN, GOOGLE_LOGIN, FACEBOOK_LOGIN, GITHUB_LOGIN, START_CODING_LOGIN_MODAL} from 'utils/stringIds.json';
import {CenterContent, FacebookButton, GitHubButton, GoogleButton, LoginText, ModalSubtext, SocialMediaButtonContainer} from './styled';

interface Props {
  showModal: boolean;
  toggleModal: () => void;
}

function LoginModal({showModal, toggleModal}: Props): JSX.Element {
  return (
    <Modal open={showModal} onClose={toggleModal}>
      <Fade in={showModal} timeout={showModal ? 500 : 300}>
        <CenterContent>
          <DarkNinjaPrepLogo height={50} width={150} />
          <LoginText>{SIGN_UP_LOGIN}</LoginText>
          <ModalSubtext>{START_CODING_LOGIN_MODAL}</ModalSubtext>
          <SocialMediaButtonContainer>
            <GoogleButton href="/api/auth/google">
              <GoogleIcon />
              {GOOGLE_LOGIN}
            </GoogleButton>
            <FacebookButton href="/api/auth/facebook">
              <FacebookIcon />
              {FACEBOOK_LOGIN}
            </FacebookButton>
            <GitHubButton href="/api/auth/github">
              <GitHubIcon />
              {GITHUB_LOGIN}
            </GitHubButton>
          </SocialMediaButtonContainer>
        </CenterContent>
      </Fade>
    </Modal>
  );
}

export default LoginModal;
