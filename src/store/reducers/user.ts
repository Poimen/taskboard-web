import { User } from 'store/models/user';

const initialState = {
  loggedIn: false,
  token: null,
  user: User
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_USER':
      state = {
        ...state,
        loggedIn: true,
        user: action.user,
        token: action.token
      };
      break;
  }

  return state;
}
