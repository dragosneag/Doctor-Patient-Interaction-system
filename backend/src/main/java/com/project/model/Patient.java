package com.project.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table (name = "patient")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="idpatient")
public class Patient {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idpatient;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "age")
    private Integer age;

    @OneToMany(mappedBy = "patient", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    @OneToMany(mappedBy = "patient", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<MedicalHistory> medicalHistories;

    @OneToMany(mappedBy = "patient", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions ;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getIdpatient() {
        return idpatient;
    }

    public void setIdpatient(Integer idpatient) {
        this.idpatient = idpatient;
    }

    public String getCnp() {
        return cnp;
    }

    public void setCnp(String cnp) {
        this.cnp = cnp;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Set<MedicalHistory> getMedicalHistories() {
        return medicalHistories;
    }

    public void setMedicalHistories(Set<MedicalHistory> medicalHistories) {
        this.medicalHistories = medicalHistories;
    }

    public void addAppointment(Appointment appointment){
        this.appointments.add(appointment);
    }

    public void addPrescription(Prescription prescription){this.prescriptions.add(prescription);}

    public void addMedicalHistory(MedicalHistory medicalHistory){this.medicalHistories.add(medicalHistory);}

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
