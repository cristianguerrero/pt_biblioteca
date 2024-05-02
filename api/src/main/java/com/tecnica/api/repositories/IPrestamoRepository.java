package com.tecnica.api.repositories;

import com.tecnica.api.models.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPrestamoRepository extends JpaRepository<Prestamo, Long> {
    Prestamo findByIdentiUsuario(String IdentiUsuario);
}
