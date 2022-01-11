import { createEpicMiddleware } from 'redux-observable';
import { createStore, Store } from 'redux';

import { createRootReducer, RootState } from './reducer';
import { RootAction } from './actions';
import { createRootEpic } from './epics';
import { getEnhancers } from './getEnhancers';

export type ApplicationStore = Store<RootState, RootAction>;

export default (
  reducers: any[],
  epics: any[],
  initialState?: RootState
): {
  store: ApplicationStore;
  epicMiddleWare: any;
} => {
  const epicMiddleWare = createEpicMiddleware<any, any, any>();
  const enhancers = getEnhancers(epicMiddleWare);

  const store = createStore(
    createRootReducer(reducers),
    initialState,
    enhancers
  );

  epicMiddleWare.run(createRootEpic(epics));

  return {
    store,
    epicMiddleWare,
  };
};
