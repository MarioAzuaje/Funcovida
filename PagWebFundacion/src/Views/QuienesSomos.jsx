import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

function QuienesSomos() {
    return (
        <>
            <Nav />
            <div className="containerQuienesSomos">
                <img src="FondoQuienesSomos.jpg" alt="" />
                <div>
                    <span>¿Quiénes somos?</span>
                    <b>
                        Somos una Organización sin Fines de Lucro
                    </b>
                    <p>
                        Si tienes VIH, <span>¡recuerda que no estás solo!</span>. Estamos aquí para caminar contigo, brindarte herramientas y acompañamiento para que puedas vivir plenamente y con tranquilidad.

                        <br />
                        <br />

                        Tenemos presencia en diversos estados de <span>Venezuela</span>, dedicada a brindar apoyo integral a las personas afectadas por el VIH y a prevenir su contagio y propagación. Nuestra misión es acompañar, educar y garantizar el acceso a servicios esenciales que mejoren la calidad de vida de quienes viven con esta condición.

                        <br />
                        <br />

                        Contamos con un equipo de médicos aliados altamente capacitados, acceso a <span>medicamentos especializados y un programa de apoyo psicológico</span> diseñado para ayudar a nuestros beneficiarios a afrontar los desafíos emocionales y sociales asociados al VIH. Creemos firmemente en la importancia de un enfoque integral que no solo trate los aspectos médicos, sino que también fomente la resiliencia y la aceptación personal.
                    </p>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default QuienesSomos
