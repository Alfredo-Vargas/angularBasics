import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  yourWord: string = "";
  yourText: string = "";
  yourShow: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick():void {
    this.yourText = this.yourWord;
    this.yourWord = "";
  }

  onShowHideClick():void {
    this.yourShow = this.yourText;
  }


}
