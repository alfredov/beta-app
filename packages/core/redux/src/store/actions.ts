import { ActionType } from 'typesafe-actions';

export const rootActionCreator = (actions: {}) => ({
  ...actions,
});

export type RootAction = ActionType<ReturnType<typeof rootActionCreator>>;
