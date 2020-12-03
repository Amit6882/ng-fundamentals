import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { userRoutes } from './user.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Amit',
      lastName: 'Dubey'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
