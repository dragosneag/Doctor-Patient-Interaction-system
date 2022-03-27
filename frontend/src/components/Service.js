import React from 'react';

const Service = ({ service, onClick }) => {
    return (
        <div className = "speciality" onClick={onClick}>
            <h3>
                {service.name}
            </h3>
        </div>
    )
};

export default Service;
