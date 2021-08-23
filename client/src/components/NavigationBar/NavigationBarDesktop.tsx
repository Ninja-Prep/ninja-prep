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
import {User} from 'utils/types/user';

import {LightNinjaPrepLogo} from '../../utils/NinjaPrepLogos';
import ProfileDropdown from './dropdown/ProfileDropdown';
import NavLinks from 'containers/NavigationBar/NavLinks';
import LoginModalDesktop from './modals/LoginModalDesktop';
import FadeIn from 'react-fade-in';

interface NavBarProps {
  readonly authUser: User;
  readonly isLoadingUser: boolean;
  readonly loadFadeIn: boolean;
}

/**
 *
 */
function NavigationBarDesktop(props: NavBarProps): JSX.Element {
  // For Shortcuts Icon
  const {isOn, toggle} = useToggler();
  const loadFadeIn = props.loadFadeIn;
  const NavBarContent = (
    <Navbar.Collapse>
      <Nav className="ml-auto pr-5 mr-5">
        <NavLinks />
        <ProfileDropdown {...props} toggleModal={toggle} />
      </Nav>
    </Navbar.Collapse>
  );
  return (
    <Navbar fixed="top" expand="lg" className="px-5 py-3 navigation-bar" variant="dark">
      <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
        <LightNinjaPrepLogo height={40} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="w-100">
        {!props.isLoadingUser && loadFadeIn && <FadeIn>{NavBarContent}</FadeIn>}
        {!props.isLoadingUser && !loadFadeIn && NavBarContent}
      </div>
      <LoginModalDesktop showModal={isOn} toggleModal={toggle} />
    </Navbar>
  );
}

export default NavigationBarDesktop;
