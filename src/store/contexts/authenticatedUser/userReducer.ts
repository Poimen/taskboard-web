// import { AppState } from 'store/models/appState';
import { User } from 'store/contexts/authenticatedUser/models/user';

export function userReducer(state: AuthenticatedUserState, action: UserActions) {
  console.log(`state = ${JSON.stringify(state, null, 2)}`);
  console.log(`action = ${JSON.stringify(action, null, 2)}`);
  switch (action.type) {
    case 'SET_USER':
      state = {
        ...state,
        currentUser: action.user
      };
      break;
  }

  console.log(`after state = ${JSON.stringify(state, null, 2)}`);

  return state;
}

export const setUser = (user: User, loggedIn: boolean): UserActions => ({ type: 'SET_USER', user, loggedIn });

export type UserActions = {
  type: 'SET_USER',
  loggedIn: boolean,
  user: User | null
}

export type AuthenticatedUserState = {
  currentUser: User | null,
  loggedIn: boolean
}
