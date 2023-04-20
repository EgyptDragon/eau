import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserCredentials } from 'src/app/user/models/user.model';
import { AuthData } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private router: Router,
  ) {

  }
  
  public authUser(userCreds: UserCredentials): Observable<AuthData> {
    // backend should receive userCreds and return AuthData
    return of({userId: '123', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJkYXRlIjoiMTIzNDU2Nzg5MCJ9.T6kdFNsXPbpY92SiKY1NQ-jvjh2tLRNLNoclrNnIHdw'});
  }

  public revokeAuthUser(): Observable<boolean> {
    return of(true);
  }

  public isAuthenticated(): boolean {
    if(!this.getAuthData()) {
      return false;
    }
    // console.log('return !this.jwtHelper.isTokenExpired(token): ', this.getAuthData()?.token);
    // Check whether the token is expired and return
    // true or false
    return true;
  }
  
  public getAuthData(): AuthData | null {
    const user = localStorage.getItem('user');
    if(!user) {
      return null;
    }
    const authData = JSON.parse(user);

    return authData;
  }
}