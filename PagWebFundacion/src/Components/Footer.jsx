import { Logo } from "./Logo"

function getYear() {
    return new Date().getFullYear()
}


function Footer () {
    return (
        <div className="footerContainer">
            <div className="footer">
                <Logo Widthx={"70px"} Heighty={"70px"}/>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/concienciaporlavidavzla/">
                                <img src="ig-logo.svg" alt="Instagram" className="socialMediaIcon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="x-logo.svg" alt="Instagram" className="socialMediaIcon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="ws-logo.svg" alt="Instagram" className="socialMediaIcon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerInfo">
                    <p>Contacto</p>
                    <img src="llamada-logo.svg" alt="Telefono" />
                    <p>+58 000-0000</p>
                    <img src="correo-logo.svg" alt="Correo Electronico" />
                    <p>correo@gmail.com</p>
                    <img src="ubi-logo.svg" alt="Telefono" />
                    <p>Ubicacion</p>
                </div>
            </div>
            <div className="copyrigth">
                <p>Copyright © 2024 - {getYear()} FuncoVida®. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer