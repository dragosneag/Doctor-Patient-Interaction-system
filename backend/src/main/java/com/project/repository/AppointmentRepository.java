package com.project.repository;

import com.project.model.Appointment;
import com.project.model.Doctor;
import com.project.model.Patient;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentRepository extends  AbstractRepository<Appointment> {

    @Query("SELECT a FROM Appointment a WHERE a.date = ?1 AND a.time =?2 AND a.doctor =?3")
    Appointment findAppointmentByDateAndAndTimeAndDoctor(LocalDate date, LocalTime time, Doctor doctor);

    @Query("SELECT a from Appointment a WHERE a.doctor = ?1 and a.date = ?2 order by a.time")
    List<Appointment> findAppointmentsByDoctorAndDate(Doctor doctor, LocalDate date);

    @Query("SELECT a from Appointment a WHERE a.patient = ?1")
    List<Appointment> findAppointmentsByPatient(Patient patient);

    @Query("SELECT a from Appointment a WHERE a.doctor = ?1")
    List<Appointment> findAppointmentsByDoctor(Doctor doctor);

    @Transactional
    @Modifying
    @Query("DELETE FROM Appointment a WHERE (a.idappointment = ?1)")
    void deleteAppointmentById(Integer appointmentId);
}
