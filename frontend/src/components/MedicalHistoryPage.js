import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import MedicalHistory from "./MedicalHistory";

const MedicalHistoryPage = () => {
    const {state} = useLocation()
    const patient = state.patient
    const navigate = useNavigate()

    const [medicalHistories, setMedicalHistories] = useState([])
    //const [currentPrescription, setCurrentPrescription] = useState('')

    const fetchPrescriptions = async () => {
        const res = await fetch(`http://localhost:8080/medicalHistories`)
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getMedicalHistories = async () => {
            const medicalHistoriesFromLocal = await fetchPrescriptions()
            var newMedicalHistories = medicalHistoriesFromLocal.filter(function(a) {

                console.log(a)
                if(a.patient.idpatient === patient.idpatient || a.patient === patient.idpatient) {
                    return a
                }
            })
            setMedicalHistories(newMedicalHistories)
        }

        getMedicalHistories()
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
                <h1 style={{marginLeft : 10}} className="details"> Medical History </h1>
                <br></br>
                <div>
                    {medicalHistories.length > 0 ? medicalHistories.map((medicalHistory, index) => (
                        <MedicalHistory key = {index} medicalHistory = {medicalHistory} />
                    )) : <label style={{marginLeft : 10}}> No medical history </label>}
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

export default MedicalHistoryPage;
