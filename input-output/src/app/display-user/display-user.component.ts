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
  @Input() displayUserList: Array<User> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.displayUser);
  }

  onDeleteUser(u: User): void {
    this.removeElementFromUserArray(u);
    // this.displayUserList.forEach(element => console.log(element));
  }

  removeElementFromUserArray(element: User): void {
    this.displayUserList.forEach((value,index) => {
        if(value==element) this.displayUserList.splice(index,1);
    });
  }
}
