/*
Wrapper component to add
- Links
- Modal
- Logged in dropdown
*/
import React from 'react';

import {useToggler} from 'containers/NavigationBar/hooks/useToggler';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './NavigationBar.css';
import {User} from 'types/user/user';

import {LightNavbarNinjaPrepLogo} from '../../utils/NinjaPrepLogos';
import ProfileDropdown from './dropdown/ProfileDropdown';
import NavLinks from './links/NavLinks';
import LoginModalDesktop from './modals/LoginModalDesktop';

interface NavBarProps {
  readonly user: User;
}

/**
 *
 */
function NavigationBarDesktop(props: NavBarProps): JSX.Element {
  // For Shortcuts Icon
  const {isOn, toggle} = useToggler();

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="px-5 py-3 navigation-bar"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
        <LightNavbarNinjaPrepLogo height={40} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto pr-5 mr-5">
          <NavLinks />
          <ProfileDropdown user={props.user} toggleModal={toggle} />
        </Nav>
      </Navbar.Collapse>
      <LoginModalDesktop showModal={isOn} toggleModal={toggle} />
    </Navbar>
  );
}

export default NavigationBarDesktop;
