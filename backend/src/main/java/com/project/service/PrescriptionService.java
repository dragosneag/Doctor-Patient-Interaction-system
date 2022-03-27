package com.project.service;

import com.project.model.Prescription;
import com.project.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PrescriptionService {
    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public Prescription save(Prescription prescription){
        return prescriptionRepository.save(prescription);
    }
    public List<Prescription> findAll(){
        List<Prescription> prescriptions = new ArrayList<>();
        Iterable<Prescription> all = prescriptionRepository.findAll();
        all.forEach(prescriptions::add);
        return prescriptions;
    }

    public List<Prescription> findAllByPatient(String cnp){
        return prescriptionRepository.findAllByPatient(cnp);
    }
}
