import React from 'react';

import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {User} from 'types/user/user';
import {SIGN_IN_NAVIGATION} from 'utils/stringIds.json';

import DropdownMenu from './DropdownMenu';

interface ProfileProps {
  readonly user: User;
  readonly toggleModal: () => void;
}

const ProfileDropdown = (props: ProfileProps): JSX.Element => {
  return (
    (props.user && <DropdownMenu user={props.user} />) || (
      <Nav.Link
        as={Link}
        to="#"
        onClick={props.toggleModal}
        className="pl-3 mr-5"
      >
        {SIGN_IN_NAVIGATION}
      </Nav.Link>
    )
  );
};

export default ProfileDropdown;
