/*
Modal that appears when a user attempts to login
There is no login page, only a modal to log the user in
*/
import React from 'react';

import {Modal} from 'react-bootstrap';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import SocialMediaButtons from 'utils/SocialMediaButtons';
import {SIGN_UP_POP_UP_BOX} from 'utils/stringIds.json';
import {CenterContent, ModalHeader, SubheadingText} from './styled';
interface Props {
  showModal: boolean;
  toggleModal: () => void;
}

function LoginModal({showModal, toggleModal}: Props): JSX.Element {
  // TO-DO: Update Social Media buttons to use styled-components
  return (
    <Modal show={showModal} onHide={toggleModal} centered>
      <ModalHeader closeButton />
      <CenterContent>
        <Modal.Body>
          <DarkNinjaPrepLogo height={50} width={300} />
          <SubheadingText>{SIGN_UP_POP_UP_BOX}</SubheadingText>
          <SocialMediaButtons cssClass="fluid ui mb-3 py-3" />
        </Modal.Body>
      </CenterContent>
    </Modal>
  );
}

export default LoginModal;
