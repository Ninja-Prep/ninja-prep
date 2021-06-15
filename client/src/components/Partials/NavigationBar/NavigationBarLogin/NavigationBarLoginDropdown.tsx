/*
Dropdown component for navigation bar when user is logged in
Currently same dropdown is shown for premium and regular users
*/

import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import BugReportIcon from '@material-ui/icons/BugReport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import {default as _} from 'lodash';
import {Nav, Image, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {AuthUser} from '../NavigationBarComponent';
import {
  GET_PREMIUM_NAVIGATION,
  SETTINGS,
  REPORT_A_BUG,
  SIGN_OUT_NAVIGATION,
  SIGN_IN_NAVIGATION,
} from '../NavigationBarStringIds';

import '../NavigationBar.css';

interface Props {
  handleShow: () => void;
  user?: AuthUser;
}

interface DropdownItemProps {
  url: string;
  cssClass?: string;
  DropdownIcon: typeof SvgIcon;
  children: React.ReactNode;
}

type ToggleDropdownProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

/**
 *
 */
function NavigationBarLoggedIn({user}: {user: AuthUser}) {
  const ToggleDropdown = React.forwardRef(
    (
      {children, onClick}: ToggleDropdownProps,
      ref: React.Ref<HTMLAnchorElement>,
    ) => (
      <a
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </a>
    ),
  );
  return (
    <div>
      <Dropdown className="pl-3">
        <Dropdown.Toggle as={ToggleDropdown} id="dropdown-basic">
          <Image
            roundedCircle
            className="profile-picture"
            src={user.profile_picture}
            alt="ProfilePhoto"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
          <DropdownItem
            url="/Premium"
            DropdownIcon={LockIcon}
            cssClass="get-premium"
          >
            {GET_PREMIUM_NAVIGATION}
          </DropdownItem>
          <DropdownItem url="#/action-3" DropdownIcon={BugReportIcon}>
            {REPORT_A_BUG}
          </DropdownItem>
          <DropdownItem url="#/action-2" DropdownIcon={SettingsIcon}>
            {SETTINGS}
          </DropdownItem>
          <Dropdown.Divider />
          <DropdownItem url="/api/auth/logout" DropdownIcon={ExitToAppIcon}>
            {SIGN_OUT_NAVIGATION}
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

/**
 *
 */
function DropdownItem({
  url,
  DropdownIcon,
  cssClass = 'text-secondary',
  children,
}: DropdownItemProps) {
  return (
    <Dropdown.Item href={url}>
      <p className={cssClass}>
        <DropdownIcon className="mr-3 my-2" />
        {children}
      </p>
    </Dropdown.Item>
  );
}

/**
 *
 */
function NavigationBarLoggedOut({handleShow}: {handleShow: () => void}) {
  return (
    <Nav.Link as={Link} to="#" onClick={handleShow} className="pl-3 mr-5">
      {SIGN_IN_NAVIGATION}
    </Nav.Link>
  );
}

/**
 *
 */
function NavigationBarLoginDropdown({handleShow, user}: Props) {
  if (!_.isNil(user)) {
    return <NavigationBarLoggedIn user={user} />;
  } else {
    return <NavigationBarLoggedOut handleShow={handleShow} />;
  }
}

export default NavigationBarLoginDropdown;
