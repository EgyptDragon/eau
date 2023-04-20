import { createAction, props } from '@ngrx/store';
import { UserCredentials } from 'src/app/user/models/user.model';
import { AuthData } from '../models/auth.model';

export const authUser = createAction(
  '[Auth] Auth user',
  props<{ data: UserCredentials }>()
);

export const authUserSuccess = createAction(
  '[Auth] Auth User Success',
  props<{ data: AuthData }>()
);

export const authUserFailure = createAction(
  '[Auth] Auth User Failure',
  props<{ error: any }>()
);

export const authUserRevoke = createAction(
  '[Auth] Auth User Revoke'
);