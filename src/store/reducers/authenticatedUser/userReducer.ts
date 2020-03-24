// import { AppState } from 'store/models/appState';
import { User } from 'store/reducers/authenticatedUser/models/user';

const initialState = { isAuthenticated: false, currentUser: null };

export function userReducer(state: AuthenticatedUserState = initialState, action: UserActions) {
  console.log(`state = ${JSON.stringify(state, null, 2)}`);
  console.log(`action = ${JSON.stringify(action, null, 2)}`);
  switch (action.type) {
    case 'SET_USER':
      state = {
        ...state,
        currentUser: action.user,
        isAuthenticated: action.isAuthenticated
      };
      break;
  }

  console.log(`after state = ${JSON.stringify(state, null, 2)}`);

  return state;
}

export const setUser = (user: User, isAuthenticated: boolean): UserActions => ({ type: 'SET_USER', user, isAuthenticated });

export type UserActions = {
  type: 'SET_USER',
  isAuthenticated: boolean,
  user: User | null
}

export type AuthenticatedUserState = {
  currentUser: User | null,
  isAuthenticated: boolean
}
