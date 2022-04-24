import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
// Import for assignment2 and assignment3
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('NewUserName') myHtmlUser!: ElementRef;
  @ViewChild('NewPassword') myHtmlPass!: ElementRef;

  givenUser: User = new User();

  @Output() createUserEvent = new EventEmitter <User>();

  constructor() { }

  ngOnInit(): void {
  }

  // for Assingment 2 function needs two arguments
  // onCreateUser(uname: string, pass: string): void {
  onCreateUser(): void {
    this.givenUser.username = this.myHtmlUser.nativeElement.value;
    this.givenUser.password = this.myHtmlPass.nativeElement.value;
    //Assginment2
    // this.givenUser.username = uname;
    // this.givenUser.password = pass;
    this.createUserEvent.emit(this.givenUser);
    // Assignment2 asks to skip the clearing of the fields
    // this.givenUser.username = "";
    // this.givenUser.password = "";
    console.log(this.givenUser.username);
  }
}
