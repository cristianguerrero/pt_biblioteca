import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private baseUrl = 'http://localhost:8080'; // URL base del servicio REST de Spring Boot

  constructor(
    private http: HttpClient
  ) { }

  public crearPrestamo(prestamoData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/prestamo`, prestamoData);
  }

  public getPrestamoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/prestamo/${id}`);
  }

  public listarPrestamo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prestamo/listar`);
  }

}
