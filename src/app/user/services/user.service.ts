import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group, User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  // private groups: Group[] = [{
  //   id: 'test',
  //   memberIds: ['123','456','678'],
  //   type: 'family',
  // }]

  // private users: User[]= [{
  //   id: '123',
  //   firstName: 'Vincent',
  //   lastName: 'Lévêque',
  //   displayName: 'Vincent Lévêque',
  //   mail: 'mail@mail.com',
  //   password: 'i57reh678arbu765voanv8787986rub67v',
  //   profilePic: 'base64',
  //   birthDate: 'timestamp?',
  //   groups: [],
  // }];

  constructor(private httpClient: HttpClient) { }

  public getUser(userId: string): Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/user/123');
  }
  
}
