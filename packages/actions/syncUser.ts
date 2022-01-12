import { ActionType, createAsyncAction } from 'typesafe-actions';

export type TResponse = { email: string; username: string; messages: [] };
const action = createAsyncAction(
  'SYNC_USER/REQUEST',
  'SYNC_USER/SUCCESS',
  'SYNC_USER/FAILURE',
  'SYNC_USER/CANCEL'
)<undefined, TResponse, string, undefined>();

export type TAction = ActionType<typeof action>;

export default action;
