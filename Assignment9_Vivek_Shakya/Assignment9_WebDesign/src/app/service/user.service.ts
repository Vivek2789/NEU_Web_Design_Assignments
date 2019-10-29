import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  constructor(private http: HttpClient) { }
  name:string =  localStorage.getItem('username');

  create(user: User) {
    console.log(user);
    return this.http.post('http://localhost:3000/user/create' , user );
  }

  updateUser(user:User){

    console.log(user);
    return this.http.put('http://localhost:3000'+'/user/'+ localStorage.getItem('username'),user );

  }
}





