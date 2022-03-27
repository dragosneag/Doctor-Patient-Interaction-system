import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { DesktopDatePicker } from "@mui/lab"
import { TextField } from "@mui/material"
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopTimePicker from '@mui/lab/DesktopTimePicker'
import Stack from '@mui/material/Stack'

const SelectDateTimePage = () => {
    const {state} = useLocation()
    const patient = state.patient
    const speciality = state.speciality
    const doctor = state.doctor
    const navigate = useNavigate()

    const [newDate, setDateValue] = useState(new Date())
    const [newTime, setTimeValue] = useState(new Date())

    function getLocaleDateString() {
        const formats = {
            "sv-SE": "yyyy-MM-dd"
        }
    }

    const addAppointment = async (appointment) => {
        console.log(JSON.stringify(appointment))
        await fetch(`http://localhost:8080/addappointment`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
    }

    const onLogOutSubmit = (e) => {
        e.preventDefault()

        navigate('/', {
        })
    }

    const onBackSubmit = (e) => {
        e.preventDefault()

        navigate('/patient-page/specialities-page/doctor-page', {
            state: {
                patient : patient,
                speciality : speciality
            }
        })
    }

    const onAppointmentSubmit = (e) => {
        e.preventDefault()

        let date = newDate.toLocaleDateString("sv-SE")
        let time = newTime.toLocaleTimeString('it-IT')

        console.log(doctor)

        addAppointment({doctor, patient, date, time})

        navigate('/patient-page', {
            state: {
                patient : patient
            }
        })
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className = "row">
                <div style={{color: '#0b4a2b', marginLeft : 50, fontSize : 50}}>DocConnect</div>
                <button className = "btn" style = {{marginLeft : 1000}} type="submit" id='btn-log-out' onClick={(e) => onLogOutSubmit(e)}>
                    Log out
                </button>
            </div>
            <div>
                <div className = "container-2">
                    <h1 style={{marginLeft : 10}} className="details"> Date of your appointment </h1>
                    <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                        <label> Please select a date for the appointment: </label>
                    </div>
                    <div>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="Select date"
                                value={newDate}
                                style = {{marginLeft : 120}}
                                minDate={new Date('2022-01-01')}
                                onChange={(newValue) => {
                                    setDateValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </div>
                    <div style={{marginLeft : 10, marginBottom : 30}} className="form-control">
                        <label> Please select a time for the appointment: </label>
                    </div>
                    <div>
                        <Stack spacing={3}>
                            <DesktopTimePicker
                                label="Select time"
                                value={newTime}
                                style = {{marginLeft : 400}}
                                onChange={(newValue) => {
                                    setTimeValue(newValue);
                                    console.log(newValue)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </div>
                    <div className = "row">
                        <button className = "btn" style = {{marginTop : 200, marginLeft : 0}} type="submit" id='btn-back' onClick={(e) => onBackSubmit(e)}>
                            Back
                        </button>
                        <button className = "btn" style = {{marginLeft : 1070}} type="submit" id='btn-make-appointment' onClick={(e) => onAppointmentSubmit(e)}>
                            Make Appointment
                        </button>
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    )
};

export default SelectDateTimePage;
