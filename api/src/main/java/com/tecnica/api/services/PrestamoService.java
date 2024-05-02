package com.tecnica.api.services;

import com.tecnica.api.models.Prestamo;
import com.tecnica.api.repositories.IPrestamoRepository;
import jakarta.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.ConstraintViolation;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class PrestamoService {
    @Autowired
    private IPrestamoRepository prestaRepo;
    @Autowired
    private Validator validator;

    public Prestamo crearPrestamo(String isbn, String identiUsuario, int tipoUsuario) {
        // Validar el campo isbn
        Set<ConstraintViolation<Prestamo>> violations = validator.validateValue(Prestamo.class, "isbn", isbn);
        if (!violations.isEmpty()) {
            throw new RuntimeException(violations.iterator().next().getMessage());
        }
        // Validar el campo identiUsuario
        Set<ConstraintViolation<Prestamo>> idUsuarioViolations = validator.validateValue(Prestamo.class, "identiUsuario", identiUsuario);
        if (!violations.isEmpty()) {
            throw new RuntimeException(idUsuarioViolations.iterator().next().getMessage());
        }
        // Verificar si el usuario ya tiene un prestamo
        Prestamo existingPrestamo = prestaRepo.findByIdentiUsuario(identiUsuario);
        if (existingPrestamo != null) {
            throw new RuntimeException("El usuario con identificación " +identiUsuario+ " ya tiene un libro prestado por lo cual no se le puede realizar otro préstamo");
        }
        // Calcular la fecha máxima de devolución
        LocalDate fechaActual = LocalDate.now();
        int diasDevolucion = calcularDiasDevolucion(tipoUsuario);
        LocalDate fechaMaxima = calcularFechaDevolucion(fechaActual, diasDevolucion);
        String fechaMaximaDevolucion = fechaMaxima.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        // Crear el Prestamo y guardarlo
        Prestamo prestamo = new Prestamo(isbn, identiUsuario, tipoUsuario, fechaMaximaDevolucion);
        prestaRepo.save(prestamo);

        return prestamo;
    }

    private int calcularDiasDevolucion(int tipoUsuario) {
        switch (tipoUsuario) {
            case 1:
                return 10; // Afiliado: 10 días
            case 2:
                return 8;  // Empleado: 8 días
            case 3:
                return 7;  // Invitado: 7 días
            default:
                throw new IllegalArgumentException("Tipo de usuario no permitido en la biblioteca.");
        }
    }

    private LocalDate calcularFechaDevolucion(LocalDate fechaActual, int diasDevolucion) {
        LocalDate fechaDevolucion = fechaActual;
        int dias = 0;

        while (dias < diasDevolucion) {
            fechaDevolucion = fechaDevolucion.plusDays(1); // Añadir un día
            //Validar que sea habil
            if (fechaDevolucion.getDayOfWeek() != DayOfWeek.SATURDAY && fechaDevolucion.getDayOfWeek() != DayOfWeek.SUNDAY) {
                dias++; // Solo contar hábiles
            }
        }
        return fechaDevolucion;
    }

    // Buscar por ID
    public Prestamo getPrestamoById(Long id) {
        Optional<Prestamo> optionalPrestamo = prestaRepo.findById(id);
        return optionalPrestamo.orElseThrow(() -> new RuntimeException("Prestamo no encontrado con ID: " + id));
    }

    // Listar
    public List<Prestamo> listarPrestamo(){
        return prestaRepo.findAll();
    }

}