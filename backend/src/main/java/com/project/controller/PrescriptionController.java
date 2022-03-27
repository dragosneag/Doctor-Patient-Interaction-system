package com.project.controller;
import com.project.model.Appointment;
import com.project.model.Patient;
import com.project.model.Prescription;
import com.project.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PrescriptionController {
    @Autowired
    PrescriptionService prescriptionService;
    @PostMapping(value = "/prescriptions")
    public Prescription save(@RequestBody  Prescription prescription){
        System.out.println(prescription.getDate());
        System.out.println(prescription.getDetails());
        System.out.println(prescription.getDoctor().getName());
        System.out.println(prescription.getPatient().getFullName());
        return prescriptionService.save(prescription);
    }

    @GetMapping("/prescriptions")
    public List<Prescription> allAppointments(){
        return prescriptionService.findAll();
    }

}
