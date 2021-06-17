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
import NavigationBarLoginModalMobile from './modals/LoginModalMobile';

interface NavBarProps {
  readonly user: User;
}

function NavigationBarMobile(props: NavBarProps): JSX.Element {
  const {isOn, toggle} = useToggler();

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="pr-5 pl-2 py-3 navigation-bar"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
        <LightNavbarNinjaPrepLogo height={40} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pr-5 mr-5">
          <NavLinks />
          <ProfileDropdown {...props} toggleModal={toggle} />
        </Nav>
        <NavigationBarLoginModalMobile
          {...props}
          showModal={isOn}
          toggleModal={toggle}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBarMobile;
