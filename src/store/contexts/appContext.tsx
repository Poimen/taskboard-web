// https://kentcdodds.com/blog/how-to-use-react-context-effectively
import React from 'react';
import reducers, { AllActions } from 'store/reducers';
import { AppState } from 'store/models/appState';

type Dispatch = (action: AllActions) => void
type AppProviderProps = { children: React.ReactNode }

const AppStateContext = React.createContext<AppState | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function AppContextProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(reducers.userReducer, { currentUser: null, apiToken: '' });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context) {
    return context;
  }
  throw new Error('useAppState must be used within an AppProvider');
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context) {
    return context;
  }
  throw new Error('useAppDispatch must be used within a AppProvider');
}

export {
  AppContextProvider,
  useAppState,
  useAppDispatch
};
