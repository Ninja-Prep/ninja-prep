import React, {Fragment} from 'react';
import FadeIn from 'react-fade-in';

import Responsiveness from 'utils/hocs/Responsiveness';

import FooterBarDesktop from './desktop/FooterBarDesktop';
import FooterBarMobile from './mobile/FooterBarMobile';

const desktop = <FooterBarDesktop />;
const mobile = <FooterBarMobile />;

interface Props {
  isLoadingUser: boolean;
}

const FooterBarComponent = (props: Props): JSX.Element => {
  if (props.isLoadingUser) {
    return <Fragment />;
  }
  return (
    <FadeIn>
      <Responsiveness desktop={desktop} mobile={mobile} />
    </FadeIn>
  );
};

export default FooterBarComponent;
