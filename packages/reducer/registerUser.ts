import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import action, { TAction, TResponse } from '../actions/registerUser';

const { request, success, failure, cancel } = action;

const data = createReducer<TResponse | null, TAction>({ id: 123 })
  .handleAction([success], (_state, { payload }) => payload)
  .handleAction([failure, cancel], () => null);

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
