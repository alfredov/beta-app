import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import action, { TAction, TResponse } from '../actions/fetchMessages';
import addMessageAction, {
  TAction as TAddMessageAction,
} from '../actions/addMessage';

const { request, success, failure, cancel } = action;

type TActions = TAction | TAddMessageAction;

let botConversation: TResponse = [
  {
    author: 'bot',
    id: '3',
    text: 'Nice yo hear you',
  },
  {
    author: 'bot',
    id: '4',
    text: 'anything else?',
  },
  {
    author: 'bot',
    id: '5',
    text: 'good bye!',
  },
];

const data = createReducer<TResponse, TActions>([])
  .handleAction([success], (_state, { payload }) => payload)
  .handleAction([failure, cancel], () => [])
  .handleAction(addMessageAction, (state, { payload: message }) => {
    if (botConversation.length > 0) {
      const [botMessage] = botConversation;
      botConversation = botConversation.slice(1, botConversation.length);
      return [...state, message, botMessage];
    } else {
      return [...state, message];
    }
  });

const error = createReducer<string | null, TAction>(null)
  .handleAction(failure, (_state, { payload }) => payload)
  .handleAction([request, cancel], () => null);

const loaded = createReducer<boolean, TAction>(false)
  .handleAction(success, () => true)
  .handleAction([request, cancel, failure], () => false);

const loading = createReducer<boolean, TAction>(false)
  .handleAction(request, () => true)
  .handleAction([success, failure, cancel], () => false);

export default combineReducers({
  data,
  error,
  loaded,
  loading,
});
