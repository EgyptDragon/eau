import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';
import {MatListModule} from '@angular/material/list';
import { fadeInAnimation } from 'src/app/app-frame/animation';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/user/models/user.model';
import * as fromUser from '../../user/store/user.selectors';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-profile-page',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatListModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class ProfilePageComponent implements OnInit {

  public user: Observable<User | null>;

  constructor(
    private store: Store,
  ) {
    this.user = of(null);
  }

  ngOnInit() {
    this.user = this.store.select(fromUser.selectUser);
  }

  public logOut() {
    this.store.dispatch(AuthActions.authUserRevoke());
  }

}
