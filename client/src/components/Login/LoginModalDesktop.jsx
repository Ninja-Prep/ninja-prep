import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import { FACEBOOK_LOGIN, GITHUB_LOGIN, GOOGLE_LOGIN, LOGIN_HEADER_TITLE, GET_STARTED } from './LoginStringIds'

function LoginModalDesktop(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModalDesktop
export { default as LoginModalDesktop } from './LoginModalDesktop'
