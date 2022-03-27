import React from 'react';

const Doctor = ({ doctor, onClick }) => {
    return (
        <div className = "speciality" onClick={onClick}>
            <h3>
                {doctor.name}
            </h3>
        </div>
    )
};

export default Doctor;
