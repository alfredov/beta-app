import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import registerUser from './registerUser';
import logoutUser from './logoutUser';
import fetchMessages from './fetchMessages';

export const REDUCER_INDEX = 'chat_app';

const reducer = combineReducers({
  registerUser,
  logoutUser,
  fetchMessages,
});

export const registerReducer = (reducers: {}) => ({
  ...reducers,
  [REDUCER_INDEX]: reducer,
});

export type RootState = {
  [REDUCER_INDEX]: StateType<typeof reducer>;
};

export default reducer;
