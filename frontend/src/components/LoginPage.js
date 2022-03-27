import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [accountType, setAccountType] = useState('');
  
    const handlePatientChange = () => {
        setAccountType('patient');
      };
    
      const handleDoctorChange = () => {
        setAccountType('doctor');
      };
  

    const fetchPatient = async () => {
        const res = await fetch(`http://localhost:8080/patients`)
        const data = await res.json()

        const patient = data.find((patient) => patient.email === username)

        if (patient) {
            return patient
        } else {
            return undefined
        }
    }
    const fetchDoctor = async () => {
        const res = await fetch(`http://localhost:8080/doctors`)
        const data = await res.json()

        const doctor = data.find((doctor) => doctor.email === username)

        if (doctor) {
            return doctor
        } else {
            return undefined
        }
    }

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        
        if (accountType === "patient"){

            const patient = await fetchPatient();
            if (patient) {
                if (patient.password === password) {
                    navigate('/patient-page', {
                        state: {
                            patient : patient
                        }
                    })
                } else {
                    alert('Wrong password!')
                    return
                }
            } else {
                alert('There is no patient with this username!')
                return
                }
        }else if (accountType === "doctor"){

            const doctor = await fetchDoctor();
            console.log(doctor)
            if (doctor) {
                if (doctor.password === password) {
                    navigate('/doctor-page', {
                        state: {
                            doctor : doctor
                        }
                    })
                } else {
                    alert('Wrong password!')
                    return
                }
            } else {
                alert('There is no doctor with this username!')
                return
            }
        }
        
    }

    const onSignUpSubmit = (e) => {
        e.preventDefault()
        
        navigate('/sign-up-page', {
        })
    }
    return (
        <div className='container'>
            <h1>Welcome to DocApp!</h1>
            <form className="add-form">
                <div className="form-control">
                    <label> Email </label>
                    <input  type="text"
                            placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Password </label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <RadioButton
                    label="Patient"
                    marginLeft = {120}
                    value={accountType === 'patient'}
                    onChange={handlePatientChange}
                />
                    <RadioButton
                    label="Doctor"
                    marginLeft = {30}
                    value={accountType === 'doctor'}
                    onChange={handleDoctorChange}
                />
                </div>
                <button type="submit" id='btn-login' className="btn btn-block" onClick={(e) => onLoginSubmit(e)}>
                    Log In
                </button>
                <div>
                    <label> You don't have an account yet? Sign up! </label>
                </div>
                <button type="submit" id='btn-sign-up' className="btn btn-block" onClick={(e) => onSignUpSubmit(e)}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};

const RadioButton = ({ label, value, onChange, marginLeft }) => {
    return (
      <label>
        <input type="radio" style={{ marginLeft : marginLeft }} checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

export default LoginPage
