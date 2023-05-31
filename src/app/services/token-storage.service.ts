import { Injectable } from '@angular/core';

const RECOVERY = 'recovery_key';
const USER_KEY = 'user_key';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {

    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(RECOVERY)
    localStorage.clear();
  }

  public saveRecovery(recovery:string): void {
    
    localStorage.removeItem(RECOVERY);
    localStorage.setItem(RECOVERY, recovery)
  }

  public getRecovery(): any {
    return localStorage.getItem(RECOVERY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }
}
