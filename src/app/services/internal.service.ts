import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor(private http: HttpClient) { }


//   getUsersDetail(){
//     return this.http.get('http://192.168.1.14:3000/api/v1/standing_instruction/approval_list');
  
// }


//for sample
getUsersDetail(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}

KYCapproval(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
}

