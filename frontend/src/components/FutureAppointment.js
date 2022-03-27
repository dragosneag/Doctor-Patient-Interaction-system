import React from 'react';

const FutureAppointment = ({ appointment, onClick }) => {
    return (
        <div className = "appointment">
            <h3>
                Date:&nbsp;&nbsp;
                {appointment.date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Time:&nbsp;&nbsp;
                {appointment.time}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Doctor:&nbsp;&nbsp;
                {appointment.doctor.name}&emsp;&emsp;&emsp;&emsp;
                <button className = "btn" type="submit" id='btn-back' onClick={() => onClick(appointment.idappointment)}>
                    Cancel
                </button>
            </h3>
        </div>
    )
};

export default FutureAppointment;
