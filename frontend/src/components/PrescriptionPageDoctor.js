import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PrescriptionPageDoctor = () => {
    const {state} = useLocation()
    const patient = state.patient
    const prescription = state.prescription
    const navigate = useNavigate()

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
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
                <h1 style={{marginLeft : 10}} className="details"> Prescription </h1>
                <br></br>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    Doctor:&nbsp;&nbsp;
                    {prescription.doctor.name}
                </div>
                <br></br>
                <div className = "container-4">
                    <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                        {prescription.details}
                    </div>
                </div>
                <br></br>
                <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                    Date:&nbsp;&nbsp;
                    {prescription.date}
                </div>
            </div>
        </div>
    </div>
    )
};

export default PrescriptionPageDoctor;