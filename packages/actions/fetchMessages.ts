import { ActionType, createAsyncAction } from 'typesafe-actions';

import { Message } from '@bits-x/chat';

export type TResponse = Message[];
const action = createAsyncAction(
  'FETCH_MESSAGES/REQUEST',
  'FETCH_MESSAGES/SUCCESS',
  'FETCH_MESSAGES/FAILURE',
  'FETCH_MESSAGES/CANCEL'
)<undefined, TResponse, string, undefined>();

export type TAction = ActionType<typeof action>;

export default action;
