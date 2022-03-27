import React from 'react';

const Appointment = ({ appointment, onClick }) => {
    return (
        <div className = "appointment" onClick={onClick}>
            <h3>
                Date:&nbsp;&nbsp;
                {appointment.date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Time:&nbsp;&nbsp;
                {appointment.time}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Doctor:&nbsp;&nbsp;
                {appointment.doctor.name}
            </h3>
        </div>
    )
};

export default Appointment;
