import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../config/env/config';
import { Modele } from '../models/modele';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
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

  getArticleForActualily(){
    const recovery = this.localStorageService.getRecovery()
    return this.http.get(environment.apiUrl + `/all_module/1?recovery=${parseInt(recovery,10)}`,this.httpOptions)
  }
}
