import React from 'react';

import {Desktop, Mobile} from 'utils/DeviceSizes';

/**
 * @param DesktopComponent Desktop component to render
 * @param MobileComponent Default to desktop component if not specified
 * @returns Render of component if it is mobile or desktop
 */

interface Props {
  desktop: JSX.Element;
  mobile: JSX.Element;
}

function Responsiveness({desktop, mobile = desktop}: Props): JSX.Element {
  return (
    <>
      <Desktop>{desktop}</Desktop>
      <Mobile>{mobile}</Mobile>
    </>
  );
}

export default Responsiveness;
