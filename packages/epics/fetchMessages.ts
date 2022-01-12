import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import action, { TAction } from '../actions/fetchMessages';

export default (action$: ActionsObservable<TAction>) =>
  action$.pipe(
    filter(isActionOf(action.request)),
    switchMap(() => {
      return of(
        action.success([
          {
            author: 'bot',
            id: '1',
            text: 'Hello fellow',
            date: 'Juev, 30 Nov 2021',
          },
          {
            author: 'bot',
            id: '2',
            text: 'How are you doing?',
          },
        ])
      );
    })
  );
