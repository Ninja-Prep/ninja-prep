import axios from 'axios';
import {User} from 'types/user/user';

/**
 * @returns if user is logged in or not
 */
export async function getAuthStatus(): Promise<boolean> {
  try {
    const authStatus = (await axios.get('/api/auth/authStatus')).data;
    return authStatus;
  } catch (e) {
    return false;
  }
}

export async function getUser(): Promise<User> {
  const getUserResponse = (await axios.get('/api/auth/getUser')).data;

  if (getUserResponse) {
    const user = {
      profilePicture: getUserResponse?.profile_picture,
    };
    return user;
  }
  return null;
}
