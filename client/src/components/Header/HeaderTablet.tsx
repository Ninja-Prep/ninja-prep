import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import SocialMediaButtons from 'utils/SocialMediaButtons';
import {GET_STARTED} from 'utils/stringIds.json';

import {
  HEADER_TITLE_1,
  HEADER_DESCRIPTION_1,
  HEADER_DESCRIPTION_2,
} from './HeaderStringIds';

import './header.css';

const HeaderTablet = (): JSX.Element => (
  <div className="header-bg text-light">
    <Container className="header-container px-5">
      <Row>
        <Col className="my-auto pr-4 pl-0">
          <div>
            <h3 className="font-weight-bold pb-2">{HEADER_TITLE_1}</h3>
            <p className="lead">
              {HEADER_DESCRIPTION_1} {HEADER_DESCRIPTION_2}
            </p>
          </div>
        </Col>
        <Col className="pl-3 pr-0">
          <div className="form-bg rounded">
            <div className="pt-4 pb-2 px-5">
              <h4 className="font-weight-bold pb-3 mx-auto text-light">
                {GET_STARTED}
              </h4>
              <div>
                <SocialMediaButtons cssClass="mx-auto fluid ui mb-4 py-3" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderTablet;