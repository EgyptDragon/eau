import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import * as UserActions from '../../user/store/user.actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';


@Injectable()
export class AuthEffects {

  authUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authUser),
      concatMap((props) =>
        this.authSerivce.authUser(props.data).pipe(
          map(data => AuthActions.authUserSuccess({data})),
          catchError(error => of(AuthActions.authUserFailure({ error }))))
      )
    );
  });

  authUserSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authUserSuccess),
      tap(data => localStorage.setItem('user', JSON.stringify(data.data))),
      tap(_=>this.router.navigateByUrl('')),
    );
  }, {dispatch: false});

  authUserRevoke$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authUserRevoke),
      tap(data => localStorage.removeItem('user')),
      tap(_=>this.router.navigateByUrl('login')),
    );
  }, {dispatch: false});


  constructor(
    private actions$: Actions,
    private authSerivce: AuthService,
    private userService: UserService,
    private router: Router,
  ) {}
}
