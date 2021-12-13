// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/users_reducer';
import gamesReducer from './reducers/games_reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  games: gamesReducer,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
