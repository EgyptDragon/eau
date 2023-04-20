import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './store/user.effects';
import { userFeatureKey, userReducer } from './store/user.reducer';


@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(userFeatureKey, userReducer),
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
