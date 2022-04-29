import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {username: 'Wim', password: 'Dams'},
    {username: 'Lars', password: 'Struyf'},
    {username: 'Phaedra', password: 'Degreef'},
  ];

  constructor() { }

  getUsers(): Array<User> {
    console.log('getUsers returns: ', this.users);
    return this.users;
  }

  addUser(user: User): void {
    this.user.push(user);
    console.log('addUser results in:', this.users);
  }
}
