import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Here you can change the value manually from true to false
  valid: boolean = true;
  userData = [
    {name: 'Harry Potter', age: 12},
    {name: 'Albus Dumbledore', age: 91},
    {name: 'Rubeus Hagrid', age: 40},
    {name: 'Hermione Granger', age: 13}
  ];

  constructor() { }

  getUserData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.valid) {
          reject('error');
        }
        else {
          resolve(this.userData);
        }
      }, 2000);
    });
  }

}
