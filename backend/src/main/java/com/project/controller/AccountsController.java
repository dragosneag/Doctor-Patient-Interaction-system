package com.project.controller;

import com.project.model.AvailableServices;
import com.project.model.Doctor;
import com.project.model.Patient;
import com.project.model.Specialty;
import com.project.repository.DoctorRepository;
import com.project.repository.PatientRepository;
import com.project.repository.SpecialtyRepository;
import com.project.service.AvailableServicesService;
import com.project.service.SpecialtyService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountsController
{
    @Autowired
    PatientRepository patientRepository;

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    SpecialtyService specialtyService;

    @Autowired
    AvailableServicesService availableServicesService;

    @PostMapping(value = "/patients")
    Patient newUser(@RequestBody Patient newUser){
        System.out.println(newUser.getFullName());
        System.out.println(newUser.getPassword());
        System.out.println(newUser.getEmail());
        System.out.println(newUser.getPhoneNumber());
        System.out.println(newUser.getAge());
        System.out.println(newUser.getCnp());
        return patientRepository.save(newUser);
    }


    @GetMapping("/patients")
    List<Patient> allPatients() {
        List<Patient> patients = new ArrayList<>();
        patientRepository.findAll().forEach(patients::add);
        return patients;
    }

    @GetMapping("/specialities")
    List<Specialty> allSpeciality() {
        List<Specialty> specialties = new ArrayList<>();
        specialtyService.findAll().forEach(specialties::add);
        return specialties;
    }

    @GetMapping("/services")
    List<AvailableServices> allServices() {
        List<AvailableServices> services = new ArrayList<>();
        availableServicesService.findAll().forEach(services::add);
        return services;
    }

    @GetMapping("/doctors")
    List<Doctor> allDoctors() {
        List<Doctor> doctors = new ArrayList<>();
        doctorRepository.findAll().forEach(doctors::add);
        for (int i = 0; i < doctors.size(); i++) {
            System.out.println(doctors.get(i).getPassword());
            System.out.println(doctors.get(i).getEmail());
            System.out.println(doctors.get(i).getName());
            System.out.println(doctors.get(i).getIddoctor());
        }
        return doctors;
    }

    @GetMapping("/doctor/{id}")
    public Doctor doctorById(@PathVariable Integer id) throws NotFoundException {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User " + id + " not found" ));

    }


    @GetMapping("/patient/{id}")
    public Patient patientById(@PathVariable Integer id) throws NotFoundException {
        System.out.println("id is :"  + id);
            return patientRepository.findById(id)
                    .orElseThrow(() -> new NotFoundException("User " + id + " not found" ));

    }

}
