import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import playCardsReducer from './playCards/playCards';
import freeCellReducer from './freeCell/freeCell';

const rootReducer = combineReducers({
  playCardsReducer,
  freeCellReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export default store;
