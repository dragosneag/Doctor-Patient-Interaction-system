import React from 'react';

const Prescription = ({ prescription, onClick }) => {
    return (
        <div className = "speciality" onClick={onClick}>
            <h3>
                Doctor:&nbsp;&nbsp;
                {prescription.doctor.name} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Date:&nbsp;&nbsp;
                {prescription.date}
            </h3>
        </div>
    )
};

export default Prescription;
