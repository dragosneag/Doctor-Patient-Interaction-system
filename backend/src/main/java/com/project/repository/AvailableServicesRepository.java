package com.project.repository;

import com.project.model.AvailableServices;
import com.project.model.Doctor;
import com.project.model.Specialty;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AvailableServicesRepository extends AbstractRepository<AvailableServices> {
    @Query("SELECT a FROM AvailableServices a WHERE a.specialty = ?1 ")
    List<AvailableServices> findAvailableServicesBySpecialty(Specialty specialty);
}
