import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser(user: User) {
    console.log(user.userName);
   return this.http.post('http://localhost:3000/user/login' ,user);
  }
}
