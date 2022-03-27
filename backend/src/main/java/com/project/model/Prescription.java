package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.awt.print.Book;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table (name = "prescription")
public class Prescription {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idprescription;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name ="iddoctor")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name ="idpatient")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Patient patient;

    @Column(name = "details")
    private String details;

    @Column(name = "date")
    private LocalDate date;

    public Integer getIdprescription() {
        return idprescription;
    }

    public void setIdprescription(Integer idprescription) {
        this.idprescription = idprescription;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getDetails() {
        return details;
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

}