package com.project.controller;

import com.project.model.MedicalHistory;
import com.project.model.Patient;
import com.project.model.Prescription;
import com.project.service.MedicalHistoryService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalHistoryController {

    @Autowired
    MedicalHistoryService medicalHistoryService;

    @PostMapping(value = "/medicalHistories")
    public MedicalHistory addMedicalHistory(@RequestBody  MedicalHistory medicalHistory){
        System.out.println(medicalHistory.getDetails());
        System.out.println(medicalHistory.getDoctor().getName());

        return medicalHistoryService.save(medicalHistory);
    }

    @GetMapping("/medicalHistories")
    public List<MedicalHistory> allMedH(){
        return medicalHistoryService.findAll();
    }

}
