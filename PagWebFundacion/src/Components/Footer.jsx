import { Logo } from "./Logo"

function getYear() {
    return new Date().getFullYear()
}

function Footer () {
    return (
            <footer>
            <div className="footerContainer">
                <div className="footer">
                    <Logo className="logoFooter"/>
                    <div className="footerSocial">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/concienciaporlavidavzla/" target="_blank">
                                    <img src="icons/ig-logo.svg" alt="Instagram" className="socialMediaIcon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/funcovida_ddhh?s=11" target="_blank">
                                    <img src="icons/x-logo.svg" alt="X" className="socialMediaIcon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.link/kgp6xy" target="_blank">
                                    <img src="icons/ws-logo.svg" alt="Whatsapp" className="socialMediaIcon" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="footerInfo">
                        <p>Contacto</p>
                        <img src="icons/llamada-logo.svg" alt="Telefono" />
                        <p>+58 414-5749563</p>
                        <img src="icons/correo-logo.svg" alt="Correo Electronico" />
                        <p>correo@gmail.com</p>
                        <img src="icons/ubi-logo.svg" alt="Telefono" />
                        <p>Venezuela</p>
                    </div>
                </div>
            </div>
            <div className="copyrigth">
                <p>Copyright © 2024 - {getYear()} FuncoVida®. All rights reserved.</p>
            </div>
            </footer>
    )
}

export default Footer