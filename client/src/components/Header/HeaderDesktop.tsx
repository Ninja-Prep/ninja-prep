import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import {GET_STARTED} from 'utils/stringIds.json';

import './header.css';
import SocialMediaButtons from '../../utils/SocialMediaButtons';
import {
  ENHANCE_YOUR_SKILLS,
  HEADER_DESCRIPTION_1,
  HEADER_DESCRIPTION_2,
} from './HeaderStringIds';

const HeaderDesktop = () => (
  <div className="header-bg text-light px-5">
    <Container className="header-container">
      <Row>
        <Col className="pr-5 pl-0 mx-5 my-auto">
          <div>
            <h3 className="font-weight-bold pb-2">{ENHANCE_YOUR_SKILLS}</h3>
            <p className="lead">
              {HEADER_DESCRIPTION_1} {HEADER_DESCRIPTION_2}
            </p>
          </div>
        </Col>
        <Col className="pl-5 pr-0 mx-5">
          <div className="form-bg rounded">
            <div className="pt-4 pb-2 px-5">
              <h4 className="font-weight-bold pb-3 mx-auto text-light">
                {GET_STARTED}
              </h4>
              <div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderDesktop;
