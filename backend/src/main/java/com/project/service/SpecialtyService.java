package com.project.service;

import com.project.model.Specialty;
import com.project.repository.SpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SpecialtyService {
    @Autowired
    private SpecialtyRepository specialtyRepository;

    public Specialty save(Specialty specialty){
        return specialtyRepository.save(specialty);
    }
    public List<Specialty> findAll(){
        List<Specialty> specialties = new ArrayList<>();
        Iterable<Specialty> all = specialtyRepository.findAll();
        all.forEach(specialties::add);
        return specialties;
    }

}
