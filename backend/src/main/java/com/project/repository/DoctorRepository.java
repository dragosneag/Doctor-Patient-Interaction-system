package com.project.repository;
import com.project.model.Doctor;
import com.project.model.Specialty;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends AbstractRepository<Doctor> {
    @Query("SELECT d FROM Doctor d WHERE d.specialty = ?1 ")
    List<Doctor> findDoctorsBySpecialty(Specialty specialty);

    @Query("SELECT d from Doctor d WHERE d.fullName =?1")
    Doctor findDoctorByFullName(String fullName);

}
