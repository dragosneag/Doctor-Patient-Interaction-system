import React from 'react';

const MedicalHistory = ({ medicalHistory }) => {
    return (
        <div className = "container-4">
            <h3>
                Doctor:&nbsp;&nbsp;
                {medicalHistory.doctor.name}
            </h3>
            <br></br>
            <h3>
                Diagnostic:&nbsp;&nbsp;
                {medicalHistory.details}
            </h3>
        </div>
    )
};

export default MedicalHistory;
