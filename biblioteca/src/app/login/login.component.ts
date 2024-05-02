import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Por favor ingrese un usuario y contraseña válidos.';
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      window.location.href = '/prestamo-form';
    } else {
      alert('Credenciales inválidas');
    }

  }

}
