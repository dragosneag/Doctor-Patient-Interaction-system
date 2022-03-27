import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Doctor from './Doctor'

const SelectDoctorPage = () => {
    const {state} = useLocation()
    const patient = state.patient
    const speciality = state.speciality
    const navigate = useNavigate()

    const [showContinue, setShowContinue] = useState(false)
    const [currentDoctor, setCurrentDoctor] = useState('')

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onContinueSubmit = (e) => {
        e.preventDefault()

        console.log(patient)

        navigate('/patient-page/specialities-page/doctor-page/date-time-page', {
            state: {
                patient : patient,
                speciality : speciality,
                doctor: currentDoctor
            }
        })
    }

    const onBackSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/specialities-page', {
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
            <div>
                <div className = "container-2">
                    <h1 style={{marginLeft : 10}} className="details"> Available doctors </h1>
                    <br></br>
                    <div className = "container-3">
                        {speciality.doctors.map((doctor, index) => (
                            <Doctor key = {index} doctor = {doctor} onClick = {() => (setShowContinue(!showContinue) & setCurrentDoctor(doctor))} />
                        ))}
                    </div>
                    <div className = "row">
                        <button className = "btn" style = {{marginLeft : 120}} type="submit" id='btn-back' onClick={(e) => onBackSubmit(e)}>
                            Back
                        </button>
                        {showContinue && <button className = "btn" style = {{marginLeft : 910}} type="submit" id='btn-continue' onClick={(e) => onContinueSubmit(e)}>
                            Continue
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SelectDoctorPage;
