import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  constructor(private http: HttpClient) { }

  // private url : "http://13.232.238.220";

  // httpsOptions = {
  //   headers :new HttpHeaders({
  //     'content-type':'application/json',
  //     'Authorization': 'app_hash',
  //     'AppID': 'identity',
  //   })
  // };

  

  signUp(user): Observable<any> {  
    let options = {headers: this.headers}
    return this.http.post<any>('http://localhost:8080/api/v1/signup/user_details', user,options)
  }

  

  headers = new HttpHeaders({
    'Authorization': 'app_hash',
    'content-type':'application/json',
    'AppID': 'identity'
  });
  
  

  //13.232.238.220
  
}
