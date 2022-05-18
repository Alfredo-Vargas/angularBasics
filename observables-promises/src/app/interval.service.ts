import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService{

  constructor() { }

  plusOneEveryTwoSeconds = new Observable(subscriber => {
    setTimeout(()=>{
      subscriber.next(1);
      setTimeout(()=>{
        subscriber.next(2);
        setTimeout(()=>{
          subscriber.next(3);
          setTimeout(()=>{
            subscriber.next(4);
            setTimeout(()=>{
              subscriber.complete();
            },2000)
          },2000)
        }, 2000);
      }, 2000);
    }, 2000);
  });
}
