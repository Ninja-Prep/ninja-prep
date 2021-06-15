import React from 'react';

import {Row} from 'react-bootstrap';

import './header.css';
import SocialMediaButtons from 'utils/SocialMediaButtons';

import {START_LEARNING_FOR_FREE} from './HeaderStringIds';

const HeaderMobile = () => (
  <div className="header-bg-mobile">
    <div className="mx-5 header-container-mobile">
      <Row className="">
        <div className="mx-auto text-light">
          <div className="pb-2">
            <h3 className="font-weight-bold pb-3 mx-auto text-light">
              {START_LEARNING_FOR_FREE}
            </h3>
            <div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
          </div>
        </div>
      </Row>
    </div>
  </div>
);

export default HeaderMobile;
