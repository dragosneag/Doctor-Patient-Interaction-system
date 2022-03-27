package com.project.controller;

import com.project.model.Appointment;

import com.project.model.Doctor;
import com.project.model.Patient;
import com.project.repository.AppointmentRepository;
import com.project.service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController implements ErrorController {
    @Autowired
    private AppointmentService appointmentService;

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "Error handling";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }

    @PostMapping(value = "/addappointment")
    Appointment newAppointment(@RequestBody Appointment newAppointment) {
        System.out.println(newAppointment.getPatient());
        System.out.println(newAppointment.getDoctor());
        return appointmentService.save(newAppointment);
    }

    @GetMapping("/appointments")
    List<Appointment> allAppointments() {
        List<Appointment> appointments = new ArrayList<>();
        appointmentService.findAll().forEach(appointments::add);
        return appointments;
    }

//    @PostMapping("/addappointment")
//    public void save(Appointment appointment) {
//        System.out.println(appointment.getDate());
//        System.out.println(appointment.getTime());
//        appointmentService.save(appointment);
//    }

    @GetMapping("/viewappointmentp")
    public List<Appointment> findByPatient(Patient patient){
        return appointmentService.findByPatient(patient);
    }

    @GetMapping("/viewappointmentd")
    public List<Appointment> findByDoctor(Doctor doctor){
        return appointmentService.findByDoctor(doctor);
    }

    @GetMapping("/appointments/{id}")
    Appointment findAppointment(@PathVariable Integer id) {
        List<Appointment> appointments = appointmentService.findAll();
        for (Appointment appointment : appointments) {
            if(appointment.getIdappointment() == id) {
                return appointment;
            }
        }
        return null;
    }

    @DeleteMapping(value = "/appointments/{id}")
    void deleteAppointment(@PathVariable Integer id) {
        List<Appointment> toDeleteAppointments = appointmentService.findAll();
        for (Appointment toDeleteAppointment : toDeleteAppointments) {
            if (toDeleteAppointment.getIdappointment() == id) {
                System.out.println(toDeleteAppointment.getTime());
                appointmentService.delete(toDeleteAppointment);
                break;
            }
        }
    }
}
