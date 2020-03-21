import { User } from 'store/models/user';

const initialState = {
  loggedIn: false,
  token: null,
  user: User
};

export function userReducer(state = initialState, action: any) {
  console.log(`state = ${JSON.stringify(state, null, 2)}`);
  console.log(`action = ${JSON.stringify(action, null, 2)}`);
  switch (action.type) {
    case 'SET_USER':
      state = {
        ...state,
        loggedIn: true,
        user: action.userDetail,
        token: action.token
      };
      break;
  }

  console.log(`after state = ${JSON.stringify(state, null, 2)}`);

  return state;
}
