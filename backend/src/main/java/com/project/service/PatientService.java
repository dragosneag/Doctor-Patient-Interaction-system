package com.project.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.model.Patient;
import com.project.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient save(Patient patient) {
        return patientRepository.save(patient);
    }

    public List<Patient> findAll() {
        List<Patient> patients = new ArrayList<>();
        Iterable<Patient> all = patientRepository.findAll();
        all.forEach(patients::add);
        return patients;
    }

    public void update(Patient patient){
        save(patient);
    }
}