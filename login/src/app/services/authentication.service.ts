import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOEKN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private platform: Platform) { 
    this.platform.ready().then(() => (
      this.checkToken()
    ));
  }

  checkToken() {
    this.storage.get(TOEKN_KEY).then(result => {
      if (result) {
        this.authenticationState.next(true)
      }
    })
  }

  login() {
    return this.storage.set(TOEKN_KEY, '123456').then(() => (
      this.authenticationState.next(true)
    ))
  }

  logout() {
    return this.storage.remove(TOEKN_KEY).then(() => (
      this.authenticationState.next(false)
    ))
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
