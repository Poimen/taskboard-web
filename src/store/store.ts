import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/authenticatedUser/userReducer';

const rootReducers = combineReducers({
  authenticatedUser: userReducer
});

export const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
);
