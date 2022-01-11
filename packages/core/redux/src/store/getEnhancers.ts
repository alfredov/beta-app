import { applyMiddleware, compose, Store, StoreEnhancer } from 'redux';
import { EpicMiddleware } from 'redux-observable';

import { RootAction } from './actions';
import { RootState } from './reducer';

const composeEnhancers = compose;

export type ApplicationStore = Store<RootState, RootAction>;
type MiddlewareStoreEnhancer = StoreEnhancer<ApplicationStore, {}>;

export const getEnhancers = (
  epicMiddleware: EpicMiddleware<any, any, RootState>
) => {
  const middlewares = [epicMiddleware];

  return composeEnhancers(
    applyMiddleware(...middlewares)
  ) as MiddlewareStoreEnhancer;
};
