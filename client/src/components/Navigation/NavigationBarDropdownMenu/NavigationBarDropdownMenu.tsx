import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

import BugReportIcon from '@material-ui/icons/BugReport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import {User} from 'utils/types/user';
import DropdownItem from './DropdownItem';
import {GET_PREMIUM_NAVIGATION, SETTINGS, REPORT_A_BUG, SIGN_OUT_NAVIGATION, SIGN_IN_NAVIGATION} from 'utils/stringIds.json';
import NavLink from '../NavigationBarLinks/styled';
import {A, DropdownMenu, ImageWrapper, PremiumLockIcon, PremiumTextColor} from './styled';

type ToggleDropdownProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => Record<string, never>;
};

interface ProfileProps {
  readonly authUser: User;
  readonly toggleLoginModal: () => void;
  readonly isPremium?: boolean;
}

const ToggleDropdown = React.forwardRef(({children, onClick}: ToggleDropdownProps, ref: React.Ref<HTMLAnchorElement>) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <A
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </A>
));

const NavigationBarDropdownMenu = (props: ProfileProps): JSX.Element => {
  if (!props.authUser) {
    return (
      <NavLink
        as={Link}
        to="#"
        onClick={() => {
          props.toggleLoginModal();
        }}
      >
        {SIGN_IN_NAVIGATION}
      </NavLink>
    );
  } else {
    return (
      <DropdownMenu>
        <Dropdown.Toggle as={ToggleDropdown}>
          <ImageWrapper roundedCircle src={props.authUser.profilePicture} alt="ProfilePhoto" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {!props.isPremium && (
            <DropdownItem to="/Premium" as={Link} DropdownIcon={PremiumLockIcon}>
              <PremiumTextColor>{GET_PREMIUM_NAVIGATION}</PremiumTextColor>
            </DropdownItem>
          )}
          <DropdownItem to="#/action-3" as={Link} DropdownIcon={BugReportIcon}>
            {REPORT_A_BUG}
          </DropdownItem>
          <DropdownItem to="/settings" as={Link} DropdownIcon={SettingsIcon}>
            {SETTINGS}
          </DropdownItem>
          <Dropdown.Divider />
          <DropdownItem href="/api/auth/logout" DropdownIcon={ExitToAppIcon}>
            {SIGN_OUT_NAVIGATION}
          </DropdownItem>
        </Dropdown.Menu>
      </DropdownMenu>
    );
  }
};

export default NavigationBarDropdownMenu;
