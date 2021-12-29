import * as React from 'react';
import {useMediaQuery} from 'react-responsive';

export function withMobileSizing<T>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    const isMobile = useMediaQuery({maxWidth: 1280});
    return <Component {...props} isMobile={isMobile} />;
  };
}
