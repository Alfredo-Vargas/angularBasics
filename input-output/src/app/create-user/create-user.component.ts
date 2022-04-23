import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  givenUser: User = new User();

  @Output() createUserEvent = new EventEmitter <User>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser(): void {
    this.createUserEvent.emit(this.givenUser);
    this.givenUser.username = "";
    this.givenUser.password = "";
    console.log(this.givenUser.username);
  }
}
