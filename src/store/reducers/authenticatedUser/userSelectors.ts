import { createSelector } from 'reselect';
import { AppState } from 'store/models/appModels';

const getAuthenticatedUserState = (state: AppState) => state.authenticatedUser;

export const selectUserName = createSelector(getAuthenticatedUserState, user => user.currentUser?.username);
export const userAuthenticated = createSelector(getAuthenticatedUserState, user => user?.isAuthenticated ?? false);
