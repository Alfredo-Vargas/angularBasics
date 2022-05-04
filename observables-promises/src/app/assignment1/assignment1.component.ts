import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  promiseWasResolved: boolean = false;
  users: Array<User>


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUserData()
    .then(
        (data) => this.users = data,
        (err) => console.error(err)
      );
  }

  isPromiseValid(): boolean {
    if (this.dataService.valid) {
      this.promiseWasResolved = true;
    }
    return this.promiseWasResolved;
  }
}
