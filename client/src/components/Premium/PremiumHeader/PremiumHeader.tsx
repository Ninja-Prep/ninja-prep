import React from 'react';

import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {PREMIUM_HEADER_TITLE, PREMIUM_HEADER_DESCRIPTION} from 'utils/stringIds.json';
import {PremiumHeaderContainer, PremiumHeaderLogoWrapper, PremiumHeaderText, PremiumSubdescription} from './styled';

/**
 *
 */
function PremiumHeader({isMobile}: {isMobile?: boolean}): JSX.Element {
  let logoHeight = 120;
  let logoWidth = 460;

  if (isMobile) {
    logoWidth /= 1.5;
    logoHeight /= 1.5;
  }

  return (
    <PremiumHeaderContainer>
      <PremiumHeaderLogoWrapper>
        <DarkNinjaPrepLogo height={logoHeight} width={logoWidth} />
      </PremiumHeaderLogoWrapper>
      <PremiumHeaderText>{PREMIUM_HEADER_TITLE}</PremiumHeaderText>
      <PremiumSubdescription>{PREMIUM_HEADER_DESCRIPTION}</PremiumSubdescription>
    </PremiumHeaderContainer>
  );
}

export default PremiumHeader;
