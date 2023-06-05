import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../config/env/config';
// import { Modele } from '../models/modele';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoursallService {
  // localStorageService: any;

  constructor(
    private http: HttpClient,
    private localStorageService: TokenStorageService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
  };

  getCoursForAll(moduleId :string): Observable<any>{
    const recovery = this.localStorageService.getRecovery()
    return this.http.get(environment.apiUrl + `/all_cours/${parseInt(moduleId,10)}?recovery=${parseInt(recovery,10)}`,this.httpOptions)
  }
}
