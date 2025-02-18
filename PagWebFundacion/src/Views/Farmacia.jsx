import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import Medicamento from "../Components/Medicamento"
import { medicamentos } from '../data/medicamentos'
import { useState } from 'react'

function Farmacia() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

    const handleClick = (imagen) => {
        setImagenSeleccionada(imagen)
    }

    return (
        <>
            <img src="manchas/Mancha_1_Section_2.png" alt="mancha5" className="mancha5"/>
            <img src="manchas/Mancha_2_Section_3.png" alt="mancha5" className="mancha5"/>
            <Nav />
            <h1 className="tituloFarmacia">Medicamentos disponibles</h1>
            <div className="containerFarmacia">
                <div className="listaMeds">
                    {medicamentos.map((med) => (
                        <Medicamento
                            key= {med}
                            imagen= {med.url}
                            nombre= {med.nombre}
                            alt= {med.alt}
                            descripcion= {med.descripcion}
                            onClick={() => handleClick(med)}
                        />
                    ))}
                </div>
                <div className="descripcionMeds">
                    {imagenSeleccionada && (
                        <div className="containerDesc">
                            <div><img src={imagenSeleccionada.url} alt={imagenSeleccionada.alt} /></div>
                            <h2>{imagenSeleccionada.nombre}</h2>
                            <p>{imagenSeleccionada.descripcion}</p>
                        </div>
                    ) || (
                        <b>Haz click a un medicamento para ver su descripción.</b>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Farmacia