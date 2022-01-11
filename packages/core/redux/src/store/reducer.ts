import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';

export const createRootReducer = (reducers: any[]) =>
  combineReducers({
    ...reducers.reduce((store, reducer) => reducer(store), {}),
  });

export type RootState = StateType<ReturnType<typeof createRootReducer>>;
