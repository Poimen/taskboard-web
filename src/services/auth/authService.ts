import React from 'react';
import { useAuthenticatedUserDispatch, useAuthenticatedUserState } from 'store/contexts/authenticatedUser/authenticatedUserContext';
import { userAuthenticatedSelector, userNameSelector } from 'store/contexts/authenticatedUser/userSelectors';
import { setUser } from 'store/contexts/authenticatedUser/userReducer';

export function useAuthService() {
  const isAuthenticated = useAuthenticatedUserState(userAuthenticatedSelector);
  const userName = useAuthenticatedUserState(userNameSelector);
  return { isAuthenticated, userName };
}

export function useAuthenticationCheck() {
  const isAuthenticated = useAuthenticatedUserState(userAuthenticatedSelector);
  const dispatch = useAuthenticatedUserDispatch();

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser({ id: 1, username: 'Anton Ego' }, true));
    }
  }, [isAuthenticated, dispatch]);
}
