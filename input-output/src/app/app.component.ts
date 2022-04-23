import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';

  displayUser: User = new User();
  listOfUsers: Array<User> = [];

  onCredentialsPassed(passedUser: User) {
    this.displayUser.username=
      passedUser.username;
    this.displayUser.password=
      passedUser.password;
    this.listOfUsers.push(this.displayUser);
    console.log(this.listOfUsers.length);
  }
}
