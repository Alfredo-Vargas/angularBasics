import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // TODO: is better to initialize the variables using ngOnInit()?
  givenUser: User = new User();

  @Output() userCredentials = new EventEmitter <User>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser(): void {
    this.userCredentials.emit(this.givenUser);
    this.givenUser.username = "";
    this.givenUser.password = "";
    console.log(this.givenUser.username);
  }
}
