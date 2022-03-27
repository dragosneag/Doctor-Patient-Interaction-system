import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import MedicalHistory from "./MedicalHistory"
import Prescription from "./Prescription"

const ViewPatientDetails = ( ) => {
    const {state} = useLocation()
    const prescriptions = state.prescriptions
    const medicalHistories = state.medicalHistories
    const navigate = useNavigate()
   
    
    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onPrescriptionSubmit = (e, currentPrescription) => {
        e.preventDefault()

        console.log(currentPrescription)

        navigate('/prescription-page-doctor', {
            state: {
                prescription: currentPrescription 
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
            <h3>Diagnostics</h3>
            <br></br>
            <div>
                {medicalHistories.length > 0 ? medicalHistories.map((medicalHistory, index) => (
                    <MedicalHistory key = {index} medicalHistory = {medicalHistory} />
                )) : <label style={{marginLeft : 10}}> No medical history </label>}
            </div>
            <br></br>
            <h3>Prescriptions</h3>
            <br></br>
            <div>
                {prescriptions.length > 0 ? prescriptions.map((prescription, index) => (
                    <Prescription key = {index} prescription = {prescription} onClick={(e) => (onPrescriptionSubmit(e, prescription))} />
                )) : <label style={{marginLeft : 10}}> No prescriptions </label>}
            </div>
            </div>   
        </div>
    )

}


export default ViewPatientDetails