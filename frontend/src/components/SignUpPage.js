import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
    const navigate = useNavigate()

    const [email, setUsername] = useState('')
    const [fullName, setFullname] = useState('')
    const [cnp, setCnp] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onCancelSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const addPatient = async (patient) => {
        await fetch(`http://localhost:8080/patients`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(patient)
        })
    }

    const onSignUpSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert('Please enter your username')
            return
        }

        if(!fullName) {
            alert('Please enter your fullname')
            return
        }

        if(!cnp) {
            alert('Please enter your cnp')
            return
        }

        if(!phoneNumber) {
            alert('Please enter your phonenumber')
            return
        }

        if(!age) {
            alert('Please enter your age')
            return
        }

        if(!password) {
            alert('Please enter your password')
            return
        }

        if(!confirmPassword) {
            alert('Please enter your confirmPassword')
            return
        }

        addPatient({email, password, cnp, fullName, phoneNumber, age})

        navigate('/', {
        })
    }

    return (
        <div className='container'>
            <h1>Welcome to DocApp!</h1>
            <form className="add-form">
                <div className="form-control">
                    <label> Username </label>
                    <input  type="text"
                            placeholder="Enter username" value={email} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Full Name </label>
                    <input  type="text"
                            placeholder="Enter full name" value={fullName} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Personal Identity Number </label>
                    <input  type="text"
                            placeholder="Enter personal identity number(CNP)" value={cnp} onChange={(e) => setCnp(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Phone Number </label>
                    <input  type="text"
                            placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhonenumber(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Age </label>
                    <input  type="number"
                            placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-control">
                    <label> Password </label>
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label> Confirm password </label>
                    <input type="password" placeholder="Renter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                <button type="submit" id='btn-sign-up-2' className="btn btn-block" onClick={(e) => onSignUpSubmit(e)}>
                    Sign Up
                </button>
                <button type="submit" id='btn-cancel' className="btn btn-block" onClick={(e) => onCancelSubmit(e)}>
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default SignUpPage