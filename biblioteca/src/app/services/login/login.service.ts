import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly usuario = environment.username;
  private readonly contraseña = environment.password;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.usuario && password === this.contraseña) {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

}
