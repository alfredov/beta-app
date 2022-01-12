import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import action, { TAction } from '../actions/logoutUser';

const { request, success, failure, cancel } = action;

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
  error,
  loaded,
  loading,
});
