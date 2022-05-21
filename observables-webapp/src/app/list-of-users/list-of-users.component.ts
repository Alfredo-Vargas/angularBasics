import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  users: Array<User>;
  valid: boolean = true;
  errorMessage: string = "The user data is invalid";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUserData()
    .then(
        (data) => this.users = data,
        (errorMessage) => console.error(errorMessage)
      );
  }

}
