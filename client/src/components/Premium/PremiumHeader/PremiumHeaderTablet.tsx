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
function PremiumHeaderTablet() {
  return (
    <div className="py-5 text-center premium-header-bg">
      <Container>
        <DarkNavbarNinjaPrepLogo height={100} width={460} />
        <h3 className="display-5 pb-2">{PREMIUM_HEADER_TITLE}</h3>
        <p className="text-secondary lead m-auto d-block pb-2">
          {PREMIUM_HEADER_DESCRIPTION}
        </p>
      </Container>
    </div>
  );
}

export default PremiumHeaderTablet;
