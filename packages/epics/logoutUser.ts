import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap, catchError, mergeMap, delay } from 'rxjs/operators';
import { of, from } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import action, { TAction } from '../actions/logoutUser';

export default (action$: ActionsObservable<TAction>) =>
  action$.pipe(
    filter(isActionOf(action.request)),
    delay(2000),
    switchMap(() => {
      return from(AsyncStorage.removeItem('@user')).pipe(
        mergeMap(() => of(action.success())),
        catchError(error => of(action.failure(error.message)))
      );
    })
  );
