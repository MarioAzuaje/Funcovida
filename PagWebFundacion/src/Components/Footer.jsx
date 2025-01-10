import { Logo } from "./Logo"

function getYear() {
    return new Date().getFullYear()
}

function Footer () {
    return (
        <div className="footerContainer">
            <div className="footer">
                <Logo width={"60px"} height={"60px"} className="logoBar"/>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/concienciaporlavidavzla/" target="_blank">
                                <img src="ig-logo.svg" alt="Instagram" className="socialMediaIcon" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="x-logo.svg" alt="X" className="socialMediaIcon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.link/kgp6xy" target="_blank">
                                <img src="ws-logo.svg" alt="Whatsapp" className="socialMediaIcon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerInfo">
                    <p>Contacto</p>
                    <img src="llamada-logo.svg" alt="Telefono" />
                    <p>+58 414-5749563</p>
                    <img src="correo-logo.svg" alt="Correo Electronico" />
                    <p>correo@gmail.com</p>
                    <img src="ubi-logo.svg" alt="Telefono" />
                    <p>Venezuela</p>
                </div>
            </div>
            <div className="copyrigth">
                <p>Copyright © 2024 - {getYear()} FuncoVida®. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer