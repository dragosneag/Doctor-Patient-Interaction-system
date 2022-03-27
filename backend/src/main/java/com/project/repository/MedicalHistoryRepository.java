package com.project.repository;

import com.project.model.MedicalHistory;
import com.project.model.Patient;
import com.project.model.Prescription;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicalHistoryRepository extends AbstractRepository<MedicalHistory> {

    @Query("select m from MedicalHistory m where m.patient.cnp = ?1 order by m.details")
    List<MedicalHistory> findAllByPatient(String cnpOfPatient);

}
