import { ActionType, createAsyncAction } from 'typesafe-actions';

export type TRequest = { email: string; username: string };
export type TResponse = { id: number };

const action = createAsyncAction(
  'REGISTER_USER/REQUEST',
  'REGISTER_USER/SUCCESS',
  'REGISTER_USER/FAILURE',
  'REGISTER_USER/CANCEL'
)<TRequest, TResponse, string, undefined>();

export type TAction = ActionType<typeof action>;

export default action;
