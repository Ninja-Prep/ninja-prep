import axios from 'axios';
import {User} from 'utils/types/user';

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
  return getUserResponse;
}
