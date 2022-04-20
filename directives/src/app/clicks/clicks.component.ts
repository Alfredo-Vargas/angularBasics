import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent implements OnInit {

  buttonCondition: boolean = false;
  now: Date;
  clicksLog: Array<Date> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    this.buttonCondition = !this.buttonCondition;
    this.now = new Date();
    if (this.clicksLog.length < 4) {
      this.clicksLog.push(this.now);
    }
    else {
      this.moreThanFourClicks();
    }
  }
  moreThanFourClicks(): void {

    if (this.clicksLog.length < 4) {
      this.clicksLog.push(this.now);
    }
  }
}
