import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../user/models/user.model';
import * as fromUser from '../user/store/user.selectors';
import * as UserActions from '../user/store/user.actions';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.scss'],
})
export class AppFrameComponent implements OnInit {

  private user: Observable<User | null>;
  
  constructor(
    private store: Store,
    private authService: AuthService,
    private userService: UserService,
  ) {
    this.user = of(null);
  }

  ngOnInit() {
    const userId = this.authService.getAuthData()?.userId;
    if(!userId) {
      return;
    }
    this.store.dispatch(UserActions.getUser({data:userId}));
  }


}
