import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
const PatientPage = ( ) => {
    const {state} = useLocation()
    const patient = state.patient
    const navigate = useNavigate()

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onNewAppointmentSubmit = async (e) => {
        e.preventDefault()

        navigate('/patient-page/specialities-page', {
            state: {
                patient : patient
            }
        })
    }

    const onSeeAppointmentSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/appointments-page', {
            state: {
                patient : patient
            }
        })
    }

    const onSeePrescriptionSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/prescriptions-page', {
            state: {
                patient : patient
            }
        })
    }

    const onSeeMedicalHistorySubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/medical-history-page', {
            state: {
                patient : patient
            }
        })
    }

    return (
        <div>
            <div className = "row">
                <div style={{color: '#0b4a2b', marginLeft : 50, fontSize : 50}}>DocConnect</div>
                <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                    Log out
                </button>
            </div>
            <div className="container-2">
                <h1 style={{marginBottom : 10}}>Welcome, {patient.fullName} !</h1>
                <div className="task" style={{color : "white", fontSize : 20, marginLeft : -10}}> Account Details </div>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    <label> Full Name </label>
                </div>
                <h3 style={{marginLeft : 10}} className="details">{patient.fullName}</h3>
                <div style={{marginLeft : 10}} className="form-control">
                    E-mail address
                    <button className = "btn" style = {{marginLeft : 830}} type="submit" id='btn-make-app' onClick={(e) => onNewAppointmentSubmit(e)}>
                        New appointment
                    </button>
                    <button className = "btn" type="submit" id='btn-see-app' onClick={(e) => onSeeAppointmentSubmit(e)}>
                        See appointments
                    </button>
                </div>
                <h3 style={{marginLeft : 10, marginBottom : 30}} className="details">{patient.email}</h3>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    Phone Number
                    <button className = "btn" style = {{marginLeft : 830}} type="submit" id='btn-see-prescr' onClick={(e) => onSeePrescriptionSubmit(e)}>
                        See prescriptions
                    </button>
                    <button className = "btn" type="submit" id='btn-see-hist' onClick={(e) => onSeeMedicalHistorySubmit(e)}>
                        See medical history
                    </button>
                </div>
                <h3 style={{marginLeft : 10, marginBottom : 30}} className="details">{patient.phoneNumber}</h3>
            </div>
        </div>
    )

}

// PatientPage.defaultProps = {
//     fullname : "John Doe",
//     username : "john@doe.com",
//     phonenumber : "0712312312"
// }

export default PatientPage