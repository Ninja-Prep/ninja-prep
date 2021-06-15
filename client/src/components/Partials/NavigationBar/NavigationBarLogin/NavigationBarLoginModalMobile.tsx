/*
Modal that appears when a user attempts to login
There is no login page, only a modal to log the user in
*/
import React from 'react';

import {Modal, Row} from 'react-bootstrap';
import SocialMediaButtons from 'utils/SocialMediaButtons';

import '../NavigationBar.css';
import {DarkNavbarNinjaPrepLogo} from '../../../../utils/NinjaPrepLogos';
import {SIGN_UP_POPUP_BOX} from '../NavigationBarStringIds';

interface Props {
  showShortcuts: boolean;
  handleClose: () => void;
}

/**
 *
 */
function NavigationBarLoginModalMobile({showShortcuts, handleClose}: Props) {
  return (
    <Modal show={showShortcuts} onHide={handleClose} centered className="px-5">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Row className="pb-5 px-0 mx-auto h-100 text-center w-75">
          <div className=" mx-0 px-0 center w-100">
            <DarkNavbarNinjaPrepLogo height={90} width={200} />
            <h3 className="font-weight-bold py-4 mx-auto">
              {SIGN_UP_POPUP_BOX}
            </h3>
            <div>{SocialMediaButtons('mx-auto fluid ui mb-3 py-3')}</div>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default NavigationBarLoginModalMobile;
