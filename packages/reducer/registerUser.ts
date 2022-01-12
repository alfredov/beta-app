import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import action, { TAction, TResponse } from '../actions/registerUser';
import logoutUserAction, {
  TAction as TLogoutUserAction,
} from '../actions/logoutUser';

import syncUserAction, {
  TAction as TSyncUserAction,
} from '../actions/syncUser';

const { request, success, failure, cancel } = action;

type TActions = TAction | TLogoutUserAction | TSyncUserAction;

const data = createReducer<TResponse | null, TActions>(null)
  .handleAction([success], (_state, { payload }) => payload)
  .handleAction([failure, cancel, logoutUserAction.success], () => null)
  .handleAction(syncUserAction.success, (_state, { payload }) => payload);

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
