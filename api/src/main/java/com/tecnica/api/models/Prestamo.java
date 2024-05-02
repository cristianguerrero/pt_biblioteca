package com.tecnica.api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Prestamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")

    private Long id;
    @Size(max = 10)
    @Pattern(regexp = "^[a-zA-Z0-9]{1,10}$", message = "La identificación del usuario debe ser alfanumérica y tener hasta 10 caracteres.")
    private String isbn;

    @Size(max = 10)
    @Pattern(regexp = "^[a-zA-Z0-9]{1,10}$", message = "La identificación del usuario debe ser alfanumérica y tener hasta 10 caracteres.")
    private String identiUsuario;

    private int tipoUsuario;
    private String fechaMaximaDevolucion;

    public Prestamo(String isbn, String identiUsuario, int tipoUsuario, String fechaMaximaDevolucion) {
        this.isbn = isbn;
        this.identiUsuario = identiUsuario;
        this.tipoUsuario = tipoUsuario;
        this.fechaMaximaDevolucion = fechaMaximaDevolucion;
    }
}

