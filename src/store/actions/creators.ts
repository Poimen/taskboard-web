import { User } from 'store/models/user';

const setUser = (userDetail: User, token: string) => ({ type: 'SET_USER', userDetail, token });

export default {
  setUser
};
