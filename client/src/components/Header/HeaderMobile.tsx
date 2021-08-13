import React from 'react';
import {Row} from 'react-bootstrap';
import SocialMediaButtons from 'utils/SocialMediaButtons';
import {HEADER_TITLE, HEADER_DESCRIPTION, GET_STARTED} from 'utils/stringIds.json';

const HeaderMobile = (): JSX.Element => (
  <div className="header-bg-mobile">
    <div className="mx-5 header-container-mobile">
      <Row className="">
        <div className="mx-auto text-light">
          <div className="pb-2">
            <h3 className="font-weight-bold pb-3 mx-auto text-light">
              {GET_STARTED}
            </h3>
            <div>
              <SocialMediaButtons cssClass="mx-auto fluid ui mb-4 py-3 " />
            </div>
          </div>
        </div>
      </Row>
    </div>
  </div>
);

export default HeaderMobile;
