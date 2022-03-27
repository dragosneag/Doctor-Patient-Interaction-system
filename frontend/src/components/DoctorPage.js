import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const DoctorPage = ( ) => {
    const {state} = useLocation()
    const doctor = state.doctor
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [patients, setPatients] = useState([])

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const fetchAppointments = async () => {
        const res = await fetch(`http://localhost:8080/appointments`)
        const data = await res.json()

        if (data) {
            return data
        } else {
            return undefined
        }

    }

    const fetchPatients = async () => {
        const res = await fetch(`http://localhost:8080/patients`)
        const data = await res.json()

        if (data) {
            return data
        } else {
            return undefined
        }

    }

    useEffect(() =>{
        const getAppointments = async () => {
            const appointmentsFromLocal = await fetchAppointments()
            console.log(appointmentsFromLocal)
            setAppointments(appointmentsFromLocal)
        }
        getAppointments()

        const getPatients = async () => {
            const patientsFromLocal = await fetchPatients()
            console.log(patientsFromLocal)
            setPatients(patientsFromLocal)
        }
        getPatients()
    },[])

    const onSeeAppointmentsSubmit = async (e) => {
        e.preventDefault()
        const appointments1 = await fetchAppointments();

        const appointments = appointments1.filter((app) => app.doctor.iddoctor == doctor.iddoctor);
        console.log(appointments)
        if (appointments) {
               navigate('/doctor-app-page', {
                        state: {
                            appointments : appointments,
                            doctor : doctor
                        }
                 })
            } else {
                alert('There are no appointments')
                return
                }
    }

    const onSeePatientsSubmit = async (e) => {
        e.preventDefault()
        const patients = await fetchPatients();

        console.log(patients)
        if (patients) {
               navigate('/view-patients', {
                        state: {
                            patients : patients
                        }
                 })
            } else {
                alert('There are no patients')
                return
                }
    }

    return (
        <div>
            <div class = "row">
                <div style={{color: '#0b4a2b', marginLeft : 50, fontSize : 50}}>DocConnect</div>
                <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                    Log out
                </button>
            </div>
            <div className="container-2">
                <h1 style={{marginBottom : 10}}>Welcome, {doctor.name} !</h1>
                <div className="task" style={{color : "white", fontSize : 20, marginLeft : -10}}> Account Details </div>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    <label> Full Name </label>
                </div>
                <h3 style={{marginLeft : 10}} className="details">{doctor.name}</h3>
                <div style={{marginLeft : 10}} className="form-control">
                    E-mail address
                    <button className = "btn" style = {{marginLeft : 870}} type="submit" id='btn-make-app' onClick={(e) => onSeePatientsSubmit(e)}>
                        See Patients
                    </button>
                    <button className = "btn" type="submit" id='btn-see-app' onClick={(e) => onSeeAppointmentsSubmit(e)}>
                        See appointments
                    </button>
                </div>
                <h3 style={{marginLeft : 10, marginBottom : 30}} className="details">{doctor.email}</h3>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    Phone Number
                </div>
                <h3 style={{marginLeft : 10, marginBottom : 30}} className="details">{doctor.phone_number}</h3>
            </div>
        </div>
    )

}

// PatientPage.defaultProps = {
//     fullname : "John Doe",
//     username : "john@doe.com",
//     phonenumber : "0712312312"
// }

export default DoctorPage