package com.project.service;

import com.project.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.model.Appointment;
import com.project.model.Patient;
import com.project.repository.AppointmentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> findAll() {
        List<Appointment> appointments = new ArrayList<>();
        Iterable<Appointment> all = appointmentRepository.findAll();
        all.forEach(appointments::add);
        return appointments;
    }

    public List<Appointment> findByPatient(Patient patient){
        return appointmentRepository.findAppointmentsByPatient(patient);
    }


    public List<Appointment> findByDoctor(Doctor doctor){
        return appointmentRepository.findAppointmentsByDoctor(doctor);
    }

    public void delete(Appointment appointment) {
        System.out.println(appointment.getIdappointment());
        appointmentRepository.deleteAppointmentById(appointment.getIdappointment());
    }
}
