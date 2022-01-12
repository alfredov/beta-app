import { ActionType, createAsyncAction } from 'typesafe-actions';

const action = createAsyncAction(
  'LOGOUT_USER/REQUEST',
  'LOGOUT_USER/SUCCESS',
  'LOGOUT_USER/FAILURE',
  'LOGOUT_USER/CANCEL'
)<undefined, undefined, string, undefined>();

export type TAction = ActionType<typeof action>;

export default action;
