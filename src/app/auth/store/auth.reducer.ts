import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {

}

export const initialState: State = {

};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.authUser, state => state),
  on(AuthActions.authUserSuccess, (state, action) => state),
  on(AuthActions.authUserFailure, (state, action) => state),
  on(AuthActions.authUserRevoke, (state, action) => state),
);
