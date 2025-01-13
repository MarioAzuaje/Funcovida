function Medicamento ({imagen, nombre, alt, onClick}) {
    return (
        <div className="containerMed" onClick={onClick}>
            <img src={imagen} alt={alt} />
            <h2>{nombre}</h2>
        </div>
    )
}

export default Medicamento