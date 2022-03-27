import { useNavigate } from "react-router-dom"
import Speciality from "./Speciality"
import Service from "./Service"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const SpecialitiesPage = ( ) => {   
    const {state} = useLocation()
    const patient = state.patient
    const navigate = useNavigate()

    const [specialities, setSpecialities] = useState([])
    const [showServices, setShowServices] = useState(false)
    const [currentSpeciality, setCurrentSpeciality] = useState('')
    const [showContinue, setShowContinue] = useState(false)

    const fetchSpecialities = async () => {
        const res = await fetch(`http://localhost:8080/specialities`)
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getSpecialities = async () => {
            const specialitiesFromLocal = await fetchSpecialities()
            console.log(specialitiesFromLocal)
            setSpecialities(specialitiesFromLocal)
        }

        getSpecialities()
    }, [])

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onContinueSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/specialities-page/doctor-page', {
            state: {
                patient : patient,
                speciality : currentSpeciality
            }
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
                    <div>
                        <h1 style={{marginLeft : 10}} className="details"> New Appointment </h1>
                        <br></br>
                        <div className = "container-3">
                            {specialities.map((speciality, index) => (
                                <Speciality key = {index} speciality = {speciality} onClick = {() => (setShowServices(!showServices) & setCurrentSpeciality(speciality))} />
                            ))}
                        </div>
                        {showServices && <div className = "container-3">
                            {currentSpeciality.availableServices.map((service, index) => (
                                <Service key = {index} service = {service} onClick = {() => (setShowContinue(!showContinue))} />
                            ))}
                        </div>}
                    </div>
                    <div className = "row">
                        <button className = "btn" style = {{marginLeft : 120}} type="submit" id='btn-back' onClick={(e) => onBackSubmit(e)}>
                            Back
                        </button>
                        {showContinue && <button className = "btn" style = {{marginLeft : 900}} type="submit" id='btn-continue' onClick={(e) => onContinueSubmit(e)}>
                            Continue
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialitiesPage
