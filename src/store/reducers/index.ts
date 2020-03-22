// import { combineReducers } from 'redux';
// import { userReducer } from './user';

// export default combineReducers({ currentUser: userReducer });
import { userReducer, setUser, UserActions } from '../contexts/authenticatedUser/userReducer';

export type AllActions = UserActions;

export const actions = {
  setUser
};

export default {
  userReducer
};
