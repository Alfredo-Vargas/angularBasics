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
  clicksLogBlue: Array<Date> = [];
  hasWhiteText: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    // this.buttonCondition = !this.buttonCondition;
    this.buttonCondition = true;
    this.now = new Date();
    if (this.clicksLog.length < 4) {
      this.clicksLog.push(this.now);
    }
    else {
      this.clicksLogBlue.push(this.now);
    }
  }
}
