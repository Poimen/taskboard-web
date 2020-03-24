import React from 'react';
import { userReducer, UserActions, AuthenticatedUserState } from 'store/contexts/authenticatedUser/userReducer';
import { ChildrenProviderProps } from 'store/models/appModels';

type Dispatch = (action: UserActions) => void

const AuthenticatedUserStateContext = React.createContext<AuthenticatedUserState | undefined>(undefined);
const AuthenticatedUserDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function AuthenticatedUserContextProvider({ children }: ChildrenProviderProps) {
  const [state, dispatch] = React.useReducer(userReducer, { isAuthenticated: false, currentUser: null });

  return (
    <AuthenticatedUserStateContext.Provider value={state}>
      <AuthenticatedUserDispatchContext.Provider value={dispatch}>
        {children}
      </AuthenticatedUserDispatchContext.Provider>
    </AuthenticatedUserStateContext.Provider>
  );
}

function useAuthenticatedUserState(selector: Function) {
  const context = React.useContext(AuthenticatedUserStateContext);
  if (context) {
    if (selector) {
      const fnSelector = selector(context);
      // if (typeof fnSelector === 'function') {
      //   return fnSelector(context);
      // }
      return fnSelector;
    }
    return context;
  }
  throw new Error('useAppState must be used within an AppProvider');
}

function useAuthenticatedUserDispatch() {
  const context = React.useContext(AuthenticatedUserDispatchContext);
  if (context) {
    return context;
  }
  throw new Error('useAppDispatch must be used within a AppProvider');
}

export {
  AuthenticatedUserContextProvider,
  useAuthenticatedUserState,
  useAuthenticatedUserDispatch
};
