import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  yourWord: string = "";  // what the user types
  yourText: string = "";  // where you store the user typing (no bidning for this!)
  yourShow: string = "";  // what is shown depending if the user wants to show it or hide it
  showSentence: string = "Show Sentence";

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick():void {
    this.yourText = this.yourWord;
    this.yourWord = "";
  }

  onShowHideClick():void {
    if (this.showSentence == "Show Sentence") {
      this.showSentence = "Hide Sentence";
      this.yourShow = this.yourText;
    }
    else {
      this.showSentence = "Show Sentence";
      this.yourShow = "";
    }
  }
}
