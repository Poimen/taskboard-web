import React from 'react';
import { setUser } from 'store/reducers/authenticatedUser/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, userAuthenticated } from 'store/reducers/authenticatedUser/userSelectors';

function performAuth(dispatcher: any, historyProvider: any) {
  dispatcher(setUser({ id: 1, username: 'Anton Ego' }, true));
  historyProvider.push('/dashboard');

  return true;
}

export function useAuthService() {
  const isAuthenticated = useSelector(userAuthenticated);
  const userName = useSelector(selectUserName);
  return { isAuthenticated, userName, performAuth };
}

export function useAuthenticationCheck() {
  const isAuthenticated = useSelector(userAuthenticated);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setUser({ id: 1, username: 'Anton Ego' }, true));
    }
  }, [isAuthenticated, dispatch]);
}
