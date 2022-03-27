import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import PastAppointment from "./PastAppointment"
import FutureAppointment from "./FutureAppointment"

const ShowAppointmentsPage = () => {
    const {state} = useLocation()
    const patient = state.patient
    const navigate = useNavigate()

    const [pastAppointments, setPastAppointments] = useState([])
    const [futureAppointments, setFutureAppointments] = useState([])

    const fetchAppointments = async () => {
        const res = await fetch(`http://localhost:8080/appointments`)
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getAppointments = async () => {
            const appointmentsFromLocal = await fetchAppointments()
            const sortedAppointments = appointmentsFromLocal.sort(function(a, b){
                var g1 = new Date(a.date)
                var g2 = new Date(b.date)
                if (g1.getTime() < g2.getTime()) {
                    return -1
                }
                if (g1.getTime() > g2.getTime()) {
                   return 1
                }
                else {
                   return 0
                }
            }) 
            
            var pastAppointments = sortedAppointments.filter(function(a){
                var g1 = new Date(a.date)
                var g2 = new Date()

                console.log(a)
                if (g1.getTime() <= g2.getTime()) {
                    if (a.patient === patient.idpatient || a.patient.idpatient === patient.idpatient) {
                        return a
                    }
                }
            })

            var futureAppointments = sortedAppointments.filter(function(a){
                var g1 = new Date(a.date)
                var g2 = new Date()

                if (g1.getTime() > g2.getTime()) {
                    if (a.patient === patient.idpatient) {
                        return a
                    }
                }
            })

            setPastAppointments(pastAppointments)
            setFutureAppointments(futureAppointments)
        }

        getAppointments()
    }, [])

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onBackSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page', {
            state: {
                patient : patient
            }
        })
    }
    
    const deleteAppointment = async (id) => {
        await fetch(`http://localhost:8080/appointments/${id}`, {
            method: 'DELETE'
        })
        setFutureAppointments(futureAppointments.filter((appointment) => appointment.idappointment !== id))
    }

    return (
    <div>
        <div className = "row">
            <div style={{color: '#0b4a2b', marginLeft : 50, fontSize : 50}}>DocConnect</div>
            <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                Log out
            </button>
        </div>
        <div>
            <div className = "container-2">
                <h1 style={{marginLeft : 10}} className="details"> Appointments </h1>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    <label> Past appointments </label>
                </div>
                <div>
                    {pastAppointments.length > 0 ? pastAppointments.map((appointment, index) => (
                        (appointment.date) && <PastAppointment key = {index} appointment = {appointment} />
                    )) : <label style={{marginLeft : 10}}> No past appointments </label>}
                </div>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    <label> Next appointments </label>
                </div>
                <div>
                    {futureAppointments.length > 0 ? futureAppointments.map((appointment, index) => (
                        (appointment.date) && <FutureAppointment key = {index} appointment = {appointment} onClick= {deleteAppointment}/>
                    )) : <label style={{marginLeft : 10}}> No future appointments </label>}
                </div>
                <div className = "row">
                    <button className = "btn" style = {{marginTop : 50}} type="submit" id='btn-back' onClick={(e) => onBackSubmit(e)}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ShowAppointmentsPage;
