import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const ViewPatients = ( ) => {
    const {state} = useLocation()
    const patients = state.patients
    const navigate = useNavigate()
    const[prescriptions, setPrescription] = useState([])
    const[diagnostics, setDiagnostics] = useState([])
    const [q ,setQ] = useState("")
    
    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    useEffect(() =>{
        const getPrescriptions = async () => {
            const prescriptionsFromLocal = await fetchPrescriptions()
            console.log(prescriptionsFromLocal)
            setPrescription(prescriptionsFromLocal)
        }
        getPrescriptions()

        const getMedh = async () => {
            const medhFromLocal = await fetchMedH()
            console.log(medhFromLocal)
            setDiagnostics(medhFromLocal)
        }
        getMedh()
    },[])

    const fetchMedH = async () => {
        const res = await fetch(`http://localhost:8080/medicalHistories`)
        const data = await res.json()

        if (data) {
            return data
        } else {
            return undefined
        }

    }

    const fetchPrescriptions = async () => {
        const res = await fetch(`http://localhost:8080/prescriptions`)
        const data = await res.json()

        if (data) {
            return data
        } else {
            return undefined
        }

    }
    const seeDetails = async (id) => {
        const prescriptions1 = await fetchPrescriptions();

        const medicalHistories1 = await fetchMedH();

        const prescriptions = prescriptions1.filter((p) => (p.patient.idpatient  == id || p.patient === id));

        const medicalHistories = medicalHistories1.filter((p) => (p.patient.idpatient  == id || p.patient === id));

        console.log(prescriptions)
        console.log(medicalHistories)

        console.log(id)
        if (medicalHistories) {
               navigate('/view-patient-details', {
                        state: {
                            prescriptions : prescriptions,
                            medicalHistories : medicalHistories
                        }
                 })
            } else {
                alert('There are no records for this patient')
                return
                }
    }

    function search(rows){
        return rows.filter((row)=> row.fullName.toLowerCase().indexOf(q.toLowerCase()) > -1)
    }
    const patients2 = search(patients)
    const columns = patients2[0] && Object.keys(patients2[0]);
    return (
        <div>
            <div class = "row">
                <div style={{color: '#0b4a2b', marginLeft : 50, fontSize : 50}}>DocConnect</div>
                <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                    Log out
                </button>
            </div>
            <div className="container-2">
            <h1 style={{marginLeft : 10}} className="details"> Patients </h1>
            <br></br>
            <div>
                <label style={{ marginLeft: 10 }}>Search patients</label>
                <input type="text" style = {{height: 30, marginLeft: 10}} value={q} onChange={(e) => setQ(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <table className="table table-stripped" style={{ width: 1200, minHeight: 100, marginLeft: 10 }}>
                <thead>
                    <tr style={{ fontSize : 20 }}>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients2.map(
                            p =>
                            <tr key = {p.idpatient} onClick={() => seeDetails(p.idpatient) }>
                                <td> {p.fullName}</td>
                                <td>{p.phoneNumber}</td>
                                <td>{p.email}</td>
                            </tr>
                        )
                    }
                    </tbody>  
                    
                </table>
            </div>
            </div>   
        </div>
    )

}


export default ViewPatients