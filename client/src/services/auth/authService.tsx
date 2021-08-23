import axios from 'axios';
import {User} from 'utils/types/user';

export async function getUser(): Promise<User> {
  const getUserResponse = (await axios.get('/api/auth/getUser')).data;
  return getUserResponse;
}
