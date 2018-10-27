import { Injectable } from '@angular/core';
import { User } from './models/user-model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() {

  }
  setUser(user: User) {
    this.user = user;
    window.localStorage.setItem(user.name, JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }
}
