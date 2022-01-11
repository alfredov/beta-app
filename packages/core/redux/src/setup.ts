import setupStore, { ApplicationStore } from './store/setup';
import { rootActionCreator } from './store/actions';

export default (actions: {}, reducers: any[], epics: any[]) => {
  const actionsCombined = rootActionCreator(actions);

  const { store, epicMiddleWare } = setupStore(reducers, epics);

  type RootAction = typeof actionsCombined;
  type BootStrapActions = (
    store: ApplicationStore,
    actions: RootAction
  ) => void;

  const triggerActions = (bootStrapActions: BootStrapActions) => {
    bootStrapActions(store, actionsCombined);
  };

  return {
    store,
    epicMiddleWare,
    triggerActions,
  };
};
