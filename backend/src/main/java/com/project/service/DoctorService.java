package com.project.service;


import com.project.model.Doctor;
import com.project.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor save(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public List<Doctor> findAll(){
        List<Doctor> doctors = new ArrayList<>();
        Iterable<Doctor> all = doctorRepository.findAll();
        all.forEach(doctors::add);
        return doctors;
    }
}
