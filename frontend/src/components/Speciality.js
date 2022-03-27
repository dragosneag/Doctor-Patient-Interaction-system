const Speciality = ( { speciality, onClick } ) => {
    return (
        <div className = "speciality" onClick={onClick}>
            <h3>
                {speciality.name}
            </h3>
        </div>
    )
}

export default Speciality
