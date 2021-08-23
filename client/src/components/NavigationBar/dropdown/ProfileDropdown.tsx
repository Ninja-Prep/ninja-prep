import React from 'react';

import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {SIGN_IN_NAVIGATION} from 'utils/stringIds.json';
import {User} from 'utils/types/user';

import DropdownMenu from './DropdownMenu';

interface ProfileProps {
  readonly authUser: User;
  readonly isLoadingUser: boolean;
  readonly toggleModal: () => void;
}

const ProfileDropdown = (props: ProfileProps): JSX.Element => {
  if (props.authUser) {
    return <DropdownMenu user={props.authUser} />;
  } else {
    return (
      <Nav.Link as={Link} to="#" onClick={props.toggleModal} className="pl-3 mr-5">
        {SIGN_IN_NAVIGATION}
      </Nav.Link>
    );
  }
};

export default ProfileDropdown;
