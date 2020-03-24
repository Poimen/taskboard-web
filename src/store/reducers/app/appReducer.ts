import { AppState } from 'store/models/appModels';

const initialState: AppState = {
  authenticatedUser: { currentUser: null, isAuthenticated: false }
};

export function appReducer(state: AppState = initialState, action: AppActions) {
  return state;
}

export type AppActions = {
}
