import React from 'react';

import {Desktop, Mobile} from '../../utils/DeviceSizes';

/**
 * @param DesktopComponent Desktop component to render
 * @param MobileComponent Default to desktop component if not specified
 * @returns Render of component if it is mobile or desktop
 */

function withResponsiveness(
  DesktopComponent: React.ComponentType,
  MobileComponent: React.ComponentType = DesktopComponent,
): JSX.Element {
  return (
    <>
      <Desktop>
        <DesktopComponent />
      </Desktop>
      <Mobile>
        <MobileComponent />
      </Mobile>
    </>
  );
}

export default withResponsiveness;
