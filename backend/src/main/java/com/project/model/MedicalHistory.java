package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.domain.Page;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "medical_history")
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idmedH;

    @Column(name = "details")
    private String details;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "idpatient")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Patient patient;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name ="iddoctor")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Doctor doctor;

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
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

    public void setIdmedH(Integer idmedH) {
        this.idmedH = idmedH;
    }

    public Integer getIdmedH() {
        return idmedH;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
