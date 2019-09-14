import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(){
    return[
      {"Id":1,"Name":"Shalini Jaiswal","age":24,"mobile":"9876543210"},
      {"Id":2,"Name":"Shalu Jaiswal","age":26,"mobile":"9876543210"},
      {"Id":3,"Name":"Shikha Jaiswal","age":30,"mobile":"9876543210"},
      {"Id":4,"Name":"Swati Jaiswal","age":40,"mobile":"9876543210"},
      {"Id":5,"Name":"Shailendra Jaiswal","age":50,"mobile":"9876543210"}
    ]
  }

  constructor() { }
}
