import  {environment}  from '../config/env/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { LoginDTO } from '../models/LoginDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

//   public login(numberClient: string, password:string): Observable<object> {
//     return this.http.post<LoginDTO>(
//       environment.apiUrl + '/users/signin',
//       {
//         numberClient: numberClient,
//         password: password,
//       }, 
//       {
//         headers:{
//             'Content-Type':  'application/json',
//         }
//     }
//     );
//   }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/users/create',
      {
        username: username,
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}