import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  @Input() displayUser: User = new User();

  constructor() { }

  ngOnInit(): void {
    console.log(this.displayUser);
  }

  onDeleteUser(){

  }
}
