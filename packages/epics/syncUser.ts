import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of, from, EMPTY } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import action, { TAction, TResponse } from '../actions/syncUser';

export default (action$: ActionsObservable<TAction>) =>
  action$.pipe(
    filter(isActionOf(action.request)),
    switchMap(() => {
      return from(AsyncStorage.getItem('@user')).pipe(
        mergeMap(storageData => {
          const jsonData: TResponse | null =
            storageData != null ? JSON.parse(storageData) : null;
          if (jsonData) {
            return of(
              action.success({
                email: jsonData.email,
                messages: [],
                username: jsonData.username,
              })
            );
          } else {
            return EMPTY;
          }
        }),
        catchError(error => {
          return of(action.failure(error.message));
        })
      );
    })
  );
