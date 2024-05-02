import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrestamoService } from '../services/prestamo/prestamo.service';
import { AuthService } from '../services/login/login.service';

@Component({
  selector: 'app-prestamo-form',
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.css']
})
export class PrestamoFormComponent implements OnInit {
  prestamoForm: FormGroup = new FormGroup({});
  responseMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private prestamoService: PrestamoService,
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    window.location.href = '/';
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }else{
      this.prestamoForm = this.formBuilder.group({
        isbn: ['', [Validators.required, Validators.maxLength(10)]],
        identiUsuario: ['', [Validators.required, Validators.maxLength(10)]],
        tipoUsuario: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.prestamoForm.valid) {
      this.responseMessage = '';
      this.errorMessage = '';

      const prestamoData = this.prestamoForm.value;

      // Llamar al servicio para crear el préstamo
      this.prestamoService.crearPrestamo(prestamoData).subscribe(
        (response) => {
          console.log('Préstamo creado con éxito:', response);
          this.responseMessage = 'Préstamo creado con éxito. ID: ' + response.id + ' - FechaMaximaDevolucion' + response.fechaMaximaDevolucion;
        },
        (error) => {
          console.error('Error al crear préstamo:', error);
          //this.errorMessage = error.error.message || 'Error al crear el préstamo.';
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              this.errorMessage = error.error;
            } else {
              this.errorMessage = 'Error al crear el préstamo.';
            }
          } else {
            this.errorMessage = 'Error al crear el préstamo.';
          }
        }
      );
    } else {
      this.markFormGroupTouched(this.prestamoForm);
    }
  }

  // Función para marcar los inputs como tocados
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
