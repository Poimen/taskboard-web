import { User } from './user';

export type AppState = {
  currentUser: User | null,
  apiToken: string
}
