import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IntervalService } from './interval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, IntervalService]
})
export class AppComponent {
  title = 'observables-promises';
}
