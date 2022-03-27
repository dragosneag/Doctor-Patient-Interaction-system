package com.project.service;

import com.project.model.Doctor;
import com.project.model.MedicalHistory;
import com.project.repository.MedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicalHistoryService {
    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    public MedicalHistory save(MedicalHistory medicalHistory){
        return medicalHistoryRepository.save(medicalHistory);
    }

    public List<MedicalHistory> findAll(){
        List<MedicalHistory> medicalHistories = new ArrayList<>();
        Iterable<MedicalHistory> all = medicalHistoryRepository.findAll();
        all.forEach(medicalHistories::add);
        return medicalHistories;
    }

    public List<MedicalHistory> findAllByPatient(String cnp){
        return medicalHistoryRepository.findAllByPatient(cnp);
    }
}
