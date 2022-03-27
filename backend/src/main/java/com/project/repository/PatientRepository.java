package com.project.repository;

import com.project.model.Patient;
import org.springframework.data.jpa.repository.Query;


public interface PatientRepository extends AbstractRepository<Patient> {

    @Query("SELECT p FROM Patient p WHERE p.fullName = ?1")
    Patient findPatientByFullName(String fullName);

    @Query("SELECT p FROM Patient p WHERE p.cnp = ?1")
    Patient findPatientByCnp(String cnp);

}
