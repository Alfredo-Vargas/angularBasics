import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLogService {

  constructor() { }

  sendToLog(msg: String): void {
    console.log('From MyLog: ' + msg);
  }
}
