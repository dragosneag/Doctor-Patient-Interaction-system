package com.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer iddoctor;
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "full_name")
    private String fullName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idspecialty")
    private Specialty specialty;

    @Column(name = "phone_number")
    private String phone_number;

/*
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name ="idnurse")
    private Patient patient;*/

    @OneToMany(mappedBy = "doctor", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Appointment> appointments;

    @OneToMany(mappedBy = "doctor",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions;

    @OneToMany(mappedBy = "doctor",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<MedicalHistory> medicalHistories;


    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getName() {
        return fullName;
    }

    public void setfullName(String fulName) {
        this.fullName = fullName;
    }

    public Integer getIddoctor() {
        return iddoctor;
    }

    public void setIddoctor(Integer iddoctor) {
        this.iddoctor = iddoctor;
    }

    public void addPrescription(Prescription prescription){this.prescriptions.add(prescription);}

    public void addMedicalHistory(MedicalHistory medicalHistory){this.medicalHistories.add(medicalHistory);}

    public void addAppointment(Appointment appointment){
        this.appointments.add(appointment);
    }
}
