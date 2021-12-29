/*
    Wrapper to handle which component to render based on user screen size
    Fall back to return Empty Fragment if component does not exist for screen size
*/

import React from 'react';

import {useMediaQuery} from 'react-responsive';

export function DeviceSizing(mobileComponent: React.ComponentType<any>, component: React.ComponentType<any>): React.ComponentType<any> {
  const isMobile = useMediaQuery({maxWidth: 576});

  return isMobile ? mobileComponent : component;
}
