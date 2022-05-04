import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  valid: boolean = false;
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

// REFLECTION:
// The above Promise looks like callback function with a setTimeout
// How a promise is different from a callback function?

