import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../services/prestamo/prestamo.service';
import { AuthService } from '../services/login/login.service';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.css']
})
export class PrestamoListComponent implements OnInit {

  usuariosConPrestamosActivos?: any[];

  constructor(
    private prestamoService: PrestamoService,
    private authService: AuthService
  ) {}

  logout(): void {
    this.authService.logout();
    window.location.href = '/';
  }

  ngOnInit() {
    this.prestamoService.listarPrestamo().subscribe(
      (data) => {
        this.usuariosConPrestamosActivos = data;
      },
      (error) => {
        console.error('Error al obtener usuarios con préstamos activos:', error);
      }
    );
  }

}
