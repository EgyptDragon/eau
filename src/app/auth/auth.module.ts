import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';



@NgModule({
  imports: [
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),],
  exports: [],
  declarations: [],
  providers: [],
})
export class AuthModule { }
