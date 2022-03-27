package com.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "specialty")
public class Specialty {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idspecialty;

    @Column(name  = "name")
    private String name;

    @OneToMany(mappedBy = "specialty", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<AvailableServices> availableServices;

    @OneToMany(mappedBy = "specialty", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Doctor> doctors;

    public Integer getIdspecialty() {
        return idspecialty;
    }

    public void setIdspecialty(Integer idspecialty) {
        this.idspecialty = idspecialty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<AvailableServices> getAvailableServices() {
        return availableServices;
    }

    public void setAvailableServices(Set<AvailableServices> availableServices) {
        this.availableServices = availableServices;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }
}
