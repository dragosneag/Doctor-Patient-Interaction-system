import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
const PrescriptionDiagnostic = ( ) => {
    const {state} = useLocation()
    const [details, setPrescriptionText] = useState('')
    const [diagnosticText, setDiagnosticText] = useState('')
    const doctor = state.doctor
    const patient = state.patient
    const navigate = useNavigate()
    
    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }


    const addPrescription = async (prescription) => {
        console.log(JSON.stringify(prescription))
        await fetch(`http://localhost:8080/prescriptions`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(prescription)
        })
    }


    
    const addDiagnostic = async (diagnostic) => {
        console.log(JSON.stringify(diagnostic))
        await fetch(`http://localhost:8080/medicalHistories`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(diagnostic)
        })
    }



    const [newDate, setDateValue] = useState(new Date())

    function getLocaleDateString() {
        const formats = {
            "sv-SE": "yyyy-MM-dd"
        }
    }

    const onPrescriptionSubmit = (e) => {
        e.preventDefault()

        let date = newDate.toLocaleDateString("sv-SE")

        console.log(doctor)
        addPrescription({doctor,patient, details, date})
    }

    const onMedicalHistorySubmit = (e) => {
        e.preventDefault()
        console.log(doctor)
        console.log(patient)
        console.log(diagnosticText)
        addDiagnostic({details : diagnosticText ,patient : patient, doctor : doctor})
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
                    <div>
                        <h3>Prescription</h3>
                            <textarea
                            value={details}
                            onChange={(e) => setPrescriptionText(e.target.value)}
                            rows={10}
                            cols={100}
                            />
                    </div>
                    <button type="submit" id='btn-sign-up-2' className="btn btn-pd" onClick={(e) => onPrescriptionSubmit(e)}>
                        Add Prescription
                    </button>
                    <div>
                        <h3>Diagnostic</h3>
                            <textarea
                            value={diagnosticText}
                            onChange={(e) => setDiagnosticText(e.target.value)}
                            rows={10}
                            cols={100}
                            />
                    </div>
                    <button type="submit" id='btn-sign-up-2' className="btn btn-pd" onClick={(e) => onMedicalHistorySubmit(e)}>
                        Add Diagnostic
                    </button>
            </div>
        </div>
    )

}


export default PrescriptionDiagnostic