import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  elapsed: number;
  startTime: number;
  endTime: number;
  timerVar: number;
  timeInterval:number = 5000;

  // this becames the new observable and observer (subject)
  timer = new Subject();

  // This allows a component to pass a value to the service
  startTimer(endTime: number): void {
    this.elapsed = 0;
    this.startTime = Date.now();
    this.endTime = +endTime;
    this.timerVar = window.setTimeout(()=>this.nextSecond(), this.timeInterval);
  }

  nextSecond(): void {
    clearTimeout(this.timerVar);
    this.elapsed += this.timeInterval;  // calculate time passed theoretically
    const stopTime = Date.now();
    const elapsedReal = stopTime - this.startTime; // calculate real time passed
    if (elapsedReal >= (this.endTime)) {
      this.timer.next(1);
    }
    else {
      const diff = elapsedReal - this.elapsed;  // calculate error made by built in timeOut function
      console.log('time error: ', diff);
      const correctedTime = Math.max(this.timeInterval - diff, 0);  // change next time interval to correct inaccuracy
      this.timerVar = window.setTimeout(()=>this.nextSecond(), correctedTime);
    }
  }
  constructor() { }
}
