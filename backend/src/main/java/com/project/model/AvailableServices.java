package com.project.model;

import javax.persistence.*;

@Entity
@Table (name = "available_services")
public class AvailableServices {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idservice;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Float price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idspecialty")
    private Specialty specialty;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setIdservice(Integer idservice) {
        this.idservice = idservice;
    }

    public Integer getIdservice() {
        return idservice;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}