import React, {Dispatch, SetStateAction} from 'react';

import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {SIGN_IN_NAVIGATION} from 'utils/stringIds.json';
import {User} from 'utils/types/user';

import BugReportIcon from '@material-ui/icons/BugReport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import {Image, Dropdown} from 'react-bootstrap';
import {GET_PREMIUM_NAVIGATION, SETTINGS, REPORT_A_BUG, SIGN_OUT_NAVIGATION} from 'utils/stringIds.json';

import DropdownItem from './DropdownItem';
type ToggleDropdownProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => Record<string, never>;
};

interface ProfileProps {
  readonly authUser: User;
  readonly toggleModal: () => void;
}

const ProfileDropdown = React.memo((props: ProfileProps): JSX.Element => {
  if (props.authUser) {
    const ToggleDropdown = React.forwardRef(({children, onClick}: ToggleDropdownProps, ref: React.Ref<HTMLAnchorElement>) => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href="#"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </a>
    ));

    return (
      <Dropdown className="pl-3">
        <Dropdown.Toggle as={ToggleDropdown}>
          <ProfilePicture profilePicture={props.authUser.profilePicture} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <DropdownItem url="/Premium" DropdownIcon={LockIcon} cssClass="get-premium">
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
    );
  } else {
    return (
      <Nav.Link as={Link} to="#" onClick={props.toggleModal} className="pl-3 mr-5">
        {SIGN_IN_NAVIGATION}
      </Nav.Link>
    );
  }
});

const ProfilePicture = React.memo(({profilePicture}: {profilePicture: string}) => {
  return <Image roundedCircle src={profilePicture} alt="ProfilePhoto" style={{width: 30}} />;
});
export default ProfileDropdown;
