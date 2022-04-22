import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  givenUsername: String = "";
  givenPassword: String = "";

  @Output() usernameMessage = new EventEmitter<String>();
  @Output() passwordMessage = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser(event: Event): void {
    this.usernameMessage.emit(this.givenUsername);
    this.passwordMessage.emit(this.givenPassword);
    givenUsername = "";
    givenPassword = "";

  }
}
