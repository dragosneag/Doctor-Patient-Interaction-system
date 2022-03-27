package com.project.repository;

import com.project.model.Patient;
import com.project.model.Specialty;
import org.springframework.data.jpa.repository.Query;

public interface SpecialtyRepository extends AbstractRepository<Specialty> {

    @Query("SELECT s FROM Specialty s WHERE s.name = ?1")
    Specialty findSpecialtyByName(String name);
}
