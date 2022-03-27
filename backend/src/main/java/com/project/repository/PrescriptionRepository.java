package com.project.repository;

import com.project.model.Prescription;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrescriptionRepository extends AbstractRepository<Prescription> {
        @Query("select  p from Prescription p where p.patient.cnp = ?1 order by p.date desc ")
        List<Prescription> findAllByPatient(String cnpOfPatient);
}
