package com.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table (name = "nurse")
public class Nurse {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idnurse;

    @Column(name = "cnp")
    private String cnp;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "phone_number")
    private String phoneNumber;

}
