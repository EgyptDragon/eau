import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const getUser = createAction(
  '[User] Get User',
  props<{ data: string }>()
);

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ data: User }>()
);

export const getUserFailure = createAction(
  '[User] Get User Failure',
  props<{ error: any }>()
);
