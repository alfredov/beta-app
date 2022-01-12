import { RootState, REDUCER_INDEX } from '../reducer';

export const registerUser = (state: RootState) =>
  state[REDUCER_INDEX].registerUser;

export const logoutUser = (state: RootState) => state[REDUCER_INDEX].logoutUser;
