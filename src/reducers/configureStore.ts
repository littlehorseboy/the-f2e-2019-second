import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import playCardsReducer from './playCards/playCards';
import freeCellReducer from './freeCell/freeCell';
import timeReducer from './time/time';

const rootReducer = combineReducers({
  playCardsReducer,
  freeCellReducer,
  timeReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export default store;
