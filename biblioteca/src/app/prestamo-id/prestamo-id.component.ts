import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PrestamoService } from '../services/prestamo/prestamo.service';
import { AuthService } from '../services/login/login.service';

@Component({
  selector: 'app-prestamo-id',
  templateUrl: './prestamo-id.component.html',
  styleUrls: ['./prestamo-id.component.css']
})
export class PrestamoIdComponent {
  prestamoId: number | undefined;
  prestamo: any;
  errorMessage: string = '';

  constructor(
    private prestamoService: PrestamoService,
    private authService: AuthService
  ) { }

  logout(): void {
    this.authService.logout();
    window.location.href = '/';
  }

  consultarPrestamo(): void {
    if (this.prestamoId !== undefined) {
      this.prestamoService.getPrestamoById(this.prestamoId).subscribe(
        (data) => {
          this.prestamo = data;
          console.log('Detalles del préstamo:', this.prestamo);
          this.errorMessage = ' ';
        },
        (error) => {
          //console.error('Error al obtener detalles del préstamo:', error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              this.errorMessage = error.error;
            } else {
              this.errorMessage = 'No existe prestamo con ese ID.';
              this.prestamo = "";
            }
          } else {
            this.errorMessage = 'Error al consultar el préstamo.';
          }
        }
      );
    }
  }

}
