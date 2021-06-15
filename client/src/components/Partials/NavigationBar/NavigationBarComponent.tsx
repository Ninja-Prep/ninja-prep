import React, {useState, useEffect} from 'react';

import axios, {AxiosResponse} from 'axios';
import {default as _} from 'lodash';

import {Desktop, Mobile} from '../../../utils/DeviceSizes';
import NavigationBarDesktop from './NavigationBarDesktop';
import NavigationBarMobile from './NavigationBarMobile';

export type AuthUser = {
  profile_picture: string;
};

export interface NavBarProps {
  user?: AuthUser;
}

/**
 *
 */
function NavigationBarComponent() {
  const [user, setUser] = useState<AuthUser>();

  useEffect(() => {
    axios
      .get<AuthUser>('/api/auth/getUser')
      .then((authUser: AxiosResponse<AuthUser>) => {
        // _.data returns an empty string instead of undefined if no user
        if (!_.isEmpty(authUser.data)) {
          setUser(authUser.data);
        }
      });
  }, []);

  return (
    <div>
      <Desktop>
        <NavigationBarDesktop user={user} />
      </Desktop>
      <Mobile>
        <NavigationBarMobile user={user} />
      </Mobile>
    </div>
  );
}

export default NavigationBarComponent;
