import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'userStore';

export interface UserState {
  user: User | null;

}

export const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.getUser, state => state),
  on(UserActions.getUserSuccess, (state, { data }) => ({ ...state, user: data })),
  on(UserActions.getUserFailure, (state, action) => state),
);
