import React from 'react';
import {Link} from 'react-router-dom';

import BugReportIcon from '@mui/icons-material/BugReport';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';

import {User} from 'utils/types/user';
import DropdownItem from './DropdownItem';
import {GET_PREMIUM_NAVIGATION, SETTINGS, REPORT_A_BUG, SIGN_OUT_NAVIGATION, SIGN_IN_NAVIGATION} from 'utils/stringIds.json';
import NavLink from '../NavigationBarLinks/styled';
import {ImageWrapper, PremiumLockIcon, PremiumTextColor} from './styled';
import {IconButton, Menu, MenuItem} from '@mui/material';

interface ProfileProps {
  readonly authUser: User;
  readonly toggleLoginModal: () => void;
  readonly isPremium?: boolean;
}

const NavigationBarDropdownMenu = (props: ProfileProps): JSX.Element => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
      <div>
        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
          <ImageWrapper src={props.authUser.profilePicture} alt="ProfilePhoto" />
        </IconButton>
        <Menu
          sx={{mt: '45px'}}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="1" onClick={handleCloseUserMenu}>
            <DropdownItem to="/premium" component={Link} DropdownIcon={PremiumLockIcon}>
              <PremiumTextColor>{GET_PREMIUM_NAVIGATION}</PremiumTextColor>
            </DropdownItem>
          </MenuItem>
          <MenuItem key="2" onClick={handleCloseUserMenu}>
            <DropdownItem href="mailto:ninjaprep@ninjaprep.io?subject=Issue: [Insert Issue]" DropdownIcon={BugReportIcon}>
              {REPORT_A_BUG}
            </DropdownItem>
          </MenuItem>
          <MenuItem key="3" onClick={handleCloseUserMenu}>
            <DropdownItem to="/settings" component={Link} DropdownIcon={SettingsIcon}>
              {SETTINGS}
            </DropdownItem>
          </MenuItem>
          <MenuItem key="4" onClick={handleCloseUserMenu}>
            <DropdownItem href="/api/auth/logout" DropdownIcon={ExitToAppIcon}>
              {SIGN_OUT_NAVIGATION}
            </DropdownItem>
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

export default NavigationBarDropdownMenu;
