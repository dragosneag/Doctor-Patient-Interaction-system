package com.project.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@Table (name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idappointment;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "iddoctor")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "idpatient")
    private Patient patient;

    @Column(name = "date")
    private LocalDate date;

    @Column(name ="time")
    private LocalTime time;


    public Integer getIdappointment() {
        return idappointment;
    }

    public void setIdappointment(Integer idappointment) {
        this.idappointment = idappointment;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }
}
