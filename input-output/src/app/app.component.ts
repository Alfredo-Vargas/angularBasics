import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';

  tempUser: User = new User();
  listOfUsers: Array<User> = [
    {username: "Alfredo", password: "123"},
    {username: "Tabitha", password: "456"},
    {username: "Piazzola", password: "tango"}
  ];

  onUserCreated(passedUser: User) {
    this.tempUser.username=
      passedUser.username;
    this.tempUser.password=
      passedUser.password;
    this.listOfUsers.push(this.tempUser);
    // this.listOfUsers.push(passedUser);
    console.log(this.listOfUsers.length);
  }
}
