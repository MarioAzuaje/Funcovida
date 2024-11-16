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
                            <a href="https://www.instagram.com/concienciaporlavidavzla/">Instagram</a>
                        </li>
                        <li>
                            <a href="">X</a>
                        </li>
                        <li>
                            <a href="">WhatsApp</a>
                        </li>
                    </ul>
                </div>
                <div className="footerInfo">
                    <p>Contacto</p>
                    <p>+58 000-0000</p>
                    <p>correo@gmail.com</p>
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