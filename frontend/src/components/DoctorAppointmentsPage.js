import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Appointment2 from "./Appointment2"


const DoctorAppointmentsPage = ( ) => {
    const {state} = useLocation()
    const appointments = state.appointments
    const doctor = state.doctor
    const navigate = useNavigate()
    const [newDate, setDateValue] = useState(new Date())
    const [patients, setPatients] = useState([])
    const [singlePatient, setSinglePatient] = useState('')

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
        const getPatients = async () => {
            const patientsFromLocal = await fetchPatients()

            console.log(patientsFromLocal)
            const currentPatient = patientsFromLocal.filter(function(a){
                console.log(a.idpatient)
                if(a.idpatient === appointments.patient) {
                    return a
                } else {
                   if(appointments.patient != 1 || appointments.patient != 2 || appointments.patient != 3 || appointments.patient != 4 || appointments.patient != 5 || appointments.patient != 6 || appointments.patient != 7) {
                       return a;
                   }
                }
            })
            console.log(currentPatient)

    
            setSinglePatient(currentPatient[0])
            setPatients(patientsFromLocal)
        }

        getPatients()
    },[])

    function getLocaleDateString() {
        const formats = {
            "sv-SE": "yyyy-MM-dd"
        }
    }
    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const writeThings = async (id) => {
        console.log(id)

        const appointment = appointments.find((app) => app.idappointment == id)

        const res = await fetch(`http://localhost:8080/patients`)
        const data = await res.json()

        const patient = data.find((patient) => patient.idpatient === appointment.patient)


        console.log(patient)
        navigate('/prescription-diagnostic', {
            state: {
                doctor : doctor,
                patient : patient
            }
     })
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
                <h1 style={{marginLeft : 10}} className="details"> Appointments </h1>
                <div>
                    {appointments.map((appointment, index) => (
                        (appointment.date) && <Appointment2 key = {index} singlePatient = {singlePatient} app = {appointment} onClick= {writeThings}/>
                    ))}
                </div>
            </div>
           
        </div>
    )

}


export default DoctorAppointmentsPage