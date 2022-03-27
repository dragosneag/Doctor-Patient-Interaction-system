import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Prescription from "./Prescription";

const PrescriptionsPage = () => {
    const {state} = useLocation()
    const patient = state.patient
    const navigate = useNavigate()

    const [prescriptions, setPrescriptions] = useState([])
    //const [currentPrescription, setCurrentPrescription] = useState('')

    const fetchPrescriptions = async () => {
        const res = await fetch(`http://localhost:8080/prescriptions`)
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getPrescriptions = async () => {
            const prescriptionsFromLocal = await fetchPrescriptions()
            var newPrescritions = prescriptionsFromLocal.filter(function(a) {

                if(a.patient.idpatient === patient.idpatient) {
                    return a
                }
            })
            setPrescriptions(newPrescritions)
        }

        getPrescriptions()
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

    const onPrescriptionSubmit = (e, currentPrescription) => {
        e.preventDefault()

        console.log(currentPrescription)

        navigate('/patient-page/prescriptions-page/prescription-page', {
            state: {
                patient : patient,
                prescription: currentPrescription 
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
                <h1 style={{marginLeft : 10}} className="details"> Prescriptions </h1>
                <br></br>
                <div>
                    {prescriptions.length > 0 ? prescriptions.map((prescription, index) => (
                        <Prescription key = {index} prescription = {prescription} onClick={(e) => (onPrescriptionSubmit(e, prescription))} />
                    )) : <label style={{marginLeft : 10}}> No prescriptions </label>}
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

export default PrescriptionsPage;
