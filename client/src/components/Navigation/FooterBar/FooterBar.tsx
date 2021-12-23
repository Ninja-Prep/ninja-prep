import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {LightNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import * as Styled from './styled';

interface Props {
  displayFooter: boolean;
}
export function FooterBar(props: Props): JSX.Element {
  if (!props.displayFooter) {
    return <Fragment />;
  }
  return (
    <Styled.FooterContainer>
      <Styled.Container>
        <LightNinjaPrepLogo height={70} width={160} />
        <Styled.FooterLinks>
          <a href="https://www.gdprprivacynotice.com/live.php?token=wo7QCLGEI3Jwy2OUCNZva98QqFbhwwxr">Privacy Policy</a>
          <span>|</span>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <span>|</span>
          <span>© 2021 NinjaPrep LLC. All Rights Reserved.</span>
        </Styled.FooterLinks>
      </Styled.Container>
    </Styled.FooterContainer>
  );
}
