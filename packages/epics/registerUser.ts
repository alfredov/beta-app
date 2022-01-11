import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import action, { TAction } from '../actions/registerUser';

export default (action$: ActionsObservable<TAction>) =>
  action$.pipe(
    filter(isActionOf(action.request)),
    switchMap(({ payload }) => {
      const jsonValue = JSON.stringify(payload);
      return from(AsyncStorage.setItem('@user', jsonValue)).pipe(
        mergeMap(() => of(action.success({ id: 0 }))),
        catchError(error => of(action.failure(error.message)))
      );
    })
  );
