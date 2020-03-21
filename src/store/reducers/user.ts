// import { User } from 'store/models/user';
import { AppState } from 'store/models/appState';
import { User } from 'store/models/user';

// type Action = {type: 'SET_USER'}

// const initialState = {
//   loggedIn: false,
//   token: null,
//   user: User
// };

export function userReducer(state: AppState, action: UserActions) {
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
