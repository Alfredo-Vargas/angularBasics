import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {


  constructor(private timerService: TimerService) { }

  givenDuration
  currentTime: number;

  ngOnInit(): void {
    this.timerService.time.subscribe(
      (timePassed: number) => {
        this.currentTime = timePassed;
      }
    );
  }

  onStartTimer() {
    this.timerService.time(currentTime);
  } 

}
