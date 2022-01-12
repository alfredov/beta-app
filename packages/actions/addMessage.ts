import { createAction, ActionType } from 'typesafe-actions';
import { Message } from '@bits-x/chat';

const action = createAction('ADD_MESSAGE')<Message>();

export type TAction = ActionType<typeof action>;

export default action;
