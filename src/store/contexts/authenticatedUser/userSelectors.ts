import { createSelector } from 'reselect';
import { AuthenticatedUserState } from './userReducer';

export function userNameSelector() {
  return createSelector((state: AuthenticatedUserState) => state.currentUser, user => user?.username);
}

export function userAuthenticated(state: AuthenticatedUserState) {
  return state.loggedIn;
}
