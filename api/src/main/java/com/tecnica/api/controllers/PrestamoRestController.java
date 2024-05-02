package com.tecnica.api.controllers;

import com.tecnica.api.models.Prestamo;
import com.tecnica.api.services.PrestamoService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/prestamo")
public class PrestamoRestController {

    @Autowired
    private PrestamoService prestamoService;

    @PostMapping
    public ResponseEntity<Object> crearPrestamo(@RequestBody Prestamo prestamo) {
        try {
            Prestamo creadoPrestamo = prestamoService.crearPrestamo(
                    prestamo.getIsbn(),
                    prestamo.getIdentiUsuario(),
                    prestamo.getTipoUsuario()
            );
            return ResponseEntity.ok().body(new PrestamoResponse(creadoPrestamo.getId(), creadoPrestamo.getFechaMaximaDevolucion()));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    // Clase para representar la respuesta simplificada
    @Setter
    @Getter
    private static class PrestamoResponse {
        private Long id;
        private String fechaMaximaDevolucion;

        public PrestamoResponse(Long id, String fechaMaximaDevolucion) {
            this.id = id;
            this.fechaMaximaDevolucion = fechaMaximaDevolucion;
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPrestamoById(@PathVariable Long id) {
        try {
            Prestamo prestamo = prestamoService.getPrestamoById(id);
            if (prestamo != null) {
                return ResponseEntity.ok(prestamo);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<Object> listarPrestamo() {
        return ResponseEntity.ok(prestamoService.listarPrestamo());
    }

}
