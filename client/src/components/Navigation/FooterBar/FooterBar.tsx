import React, {Fragment} from 'react';

import {LightNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {FooterLogo, FooterContainer} from './styled';

interface Props {
  displayFooter: boolean;
}
export function FooterBar(props: Props): JSX.Element {
  if (!props.displayFooter) {
    return <Fragment />;
  }
  return (
    <FooterContainer>
      <FooterLogo>
        <LightNinjaPrepLogo height={70} width={160} />
      </FooterLogo>
    </FooterContainer>
  );
}
