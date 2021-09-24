import React from 'react';

import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {LightNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {FooterLogo, FooterContainer} from './styled';

/**
 *
 */
function FooterBarDesktop(): JSX.Element {
  return (
    <FooterContainer>
      <FooterLogo>
        <LightNinjaPrepLogo height={70} width={160} />
      </FooterLogo>
    </FooterContainer>
  );
}

export default FooterBarDesktop;
