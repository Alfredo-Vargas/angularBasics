import { Component, OnInit, OnDestroy } from '@angular/core';
import { IntervalService } from '../interval.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnDestroy {

  numberToChange: number;
  numberObsSubscription: Subscription;

  constructor(private intervalService: IntervalService) { }

  ngOnInit(): void {
    this.numberObsSubscription = this.intervalService.plusOneEveryTwoSeconds.subscribe(
      (numberValue: number) => {
        this.numberToChange = numberValue;
        console.log(numberValue);
      },

      (error: string) => {
        console.log('error occured ');
      },

      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.numberObsSubscription.unsubscribe();
  }

}
