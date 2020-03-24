import { AuthenticatedUserState } from 'store/reducers/authenticatedUser/userReducer';

export type ChildrenProviderProps = { children: React.ReactNode }

export type AppState = {
  authenticatedUser: AuthenticatedUserState
}
