import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [MatFormFieldModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule,],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required,]),
    password: new FormControl(''),
  });

  constructor(
    private store: Store,
  ) {

  }

  onSubmit() {
    // console.warn(this.loginForm.value);
    if(this.loginForm.value.mail && this.loginForm.value.password) {
      this.store.dispatch(AuthActions.authUser({data: { 
        mail: this.loginForm.value.mail,
        password: this.loginForm.value.password,
      }}));
    }
  }
}
