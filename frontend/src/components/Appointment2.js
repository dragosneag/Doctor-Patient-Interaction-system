import React from 'react';

const Appointment2 = ({singlePatient, app, onClick}) => {
        var classN = new String("appointment")
        var g1 = new Date(app.date)
        var g2 = new Date()

        if (g1.getTime() < g2.getTime()){
            classN = "past-appointment"
        }

        return(
            <div className = {classN}  style ={ {cursor: 'pointer'} } onClick={() => onClick(app.idappointment)}>
            { <h3>
                Date:&nbsp;&nbsp;
                {app.date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Time:&nbsp;&nbsp;
                {app.time}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Patient:&nbsp;&nbsp;
                {singlePatient.fullName}
            </h3>}
            </div>
        )
};

export default Appointment2;
