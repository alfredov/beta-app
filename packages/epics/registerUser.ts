import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap, catchError, mergeMap, delay } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import action, { TAction } from '../actions/registerUser';

export default (action$: ActionsObservable<TAction>) =>
  action$.pipe(
    filter(isActionOf(action.request)),
    delay(3000),
    switchMap(({ payload }) => {
      const jsonValue = JSON.stringify(payload);
      return from(AsyncStorage.setItem('@user', jsonValue)).pipe(
        mergeMap(() => of(action.success({ ...payload, messages: [] }))),
        catchError(error => of(action.failure(error.message)))
      );
    })
  );
