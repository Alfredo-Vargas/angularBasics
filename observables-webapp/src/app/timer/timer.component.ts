import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  constructor(private timerService: TimerService) { }

  elapsed: number;
  startTime:number;
  endTime:number;
  timerVar: number;
  timeInterval: number;

  currentTime: number;
  timerObsSubscription: Subscription;

  ngOnInit(): void {
    this.timerObsSubscription = this.timerService.timer.subscribe(
      (timePassed: number) => {
        this.currentTime = timePassed;
      }
    );
  }

  // This sends data to the Subject timeActivated in the service TimerService
  onStartTimer() {
    this.timerService.startTimer(this.timeInterval);
  } 

  ngOnDestroy(): void {
    this.timerObsSubscription.unsubscribe();
  }
}

