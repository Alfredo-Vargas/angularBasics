import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

  constructor() { }

  @Input() body: String = "Here is the content";

  header: String = "Here is the header";

  ngOnInit(): void {
  }

}
