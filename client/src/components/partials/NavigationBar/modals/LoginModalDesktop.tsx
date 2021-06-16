/*
Modal that appears when a user attempts to login
There is no login page, only a modal to log the user in
*/
import React from 'react';

import {Modal} from 'react-bootstrap';
import {DarkNavbarNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import SocialMediaButtons from 'utils/SocialMediaButtons';
import {SIGN_UP_POP_UP_BOX} from 'utils/stringIds.json';
import '../NavigationBar.css';

/**
 *
 */

interface Props {
  showModal: boolean;
  toggleModal: () => void;
}

function LoginModalDesktop({showModal, toggleModal}: Props): JSX.Element {
  return (
    <Modal show={showModal} onHide={toggleModal} centered>
      <Modal.Header closeButton className="modal-header" />
      <Modal.Body className="w-50 text-center mx-auto">
        <DarkNavbarNinjaPrepLogo height={90} width={200} />
        <h3 className="font-weight-bold py-4 mx-auto">{SIGN_UP_POP_UP_BOX}</h3>
        <SocialMediaButtons cssClass="fluid ui mb-3 py-3" />
      </Modal.Body>
    </Modal>
  );
}

export default LoginModalDesktop;
