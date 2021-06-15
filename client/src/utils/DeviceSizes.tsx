/*
    Wrapper to handle which component to render based on user screen size
    Fall back to return Empty Fragment if component does not exist for screen size
*/

import React, {Fragment} from 'react';

import {useMediaQuery} from 'react-responsive';

type Props = {
  children: React.ReactNode;
};

export const Desktop = ({children}: Props): JSX.Element => {
  const isDesktop: boolean = useMediaQuery({minWidth: 992});

  if (isDesktop) {
    if (children != null) return <Fragment>{children}</Fragment>;
  }
  return <Fragment />;
};

export const Tablet = ({children}: Props): JSX.Element => {
  const isTablet: boolean = useMediaQuery({minWidth: 768, maxWidth: 991});
  if (isTablet) {
    if (children != null) return <Fragment>{children}</Fragment>;
  }
  return <Fragment />;
};

export const Mobile = ({children}: Props): JSX.Element => {
  const isMobile: boolean = useMediaQuery({maxWidth: 767});
  if (isMobile) {
    if (children != null) return <Fragment>{children}</Fragment>;
  }
  return <Fragment />;
};

export const Default = ({children}: Props): JSX.Element => {
  if (children != null) return <Fragment>{children}</Fragment>;
  return <Fragment />;
};
