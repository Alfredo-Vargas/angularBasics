import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  time = new Subject();

  // to allow a component to pass some value (time in our case)
  time(timePassed: number) {
    this.time.next(timePassed);
  }

  constructor() { }
}
