import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.actions';
import { UserService } from '../services/user.service';


@Injectable()
export class UserEffects {

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.getUser),
      concatMap((props) =>
        this.userService.getUser(props.data).pipe(
          map(data => UserActions.getUserSuccess({ data })),
          catchError(error => of(UserActions.getUserFailure({ error }))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
