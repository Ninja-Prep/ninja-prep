import React from 'react';

import '../Premium.css';
import {Container} from 'react-bootstrap';

import {DarkNavbarNinjaPrepLogo} from '../../../utils/NinjaPrepLogos';
import {
  PREMIUM_HEADER_TITLE,
  PREMIUM_HEADER_DESCRIPTION,
} from './PremiumHeaderStringIds';

/**
 *
 */
function PremiumHeaderMobile() {
  return (
    <div className="py-5 px-3 text-center premium-header-bg">
      <Container>
        <DarkNavbarNinjaPrepLogo height={100} width={260} />
        <h3 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h3>
        <p className="text-secondary lead m-auto d-block ">
          {PREMIUM_HEADER_DESCRIPTION}
        </p>
      </Container>
    </div>
  );
}

export default PremiumHeaderMobile;
