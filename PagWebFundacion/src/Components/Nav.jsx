import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"

function Nav() {

    return (
        <div className="navbar">
            <div className="containerNav">
                <Logo Widthx={"70px"} Heighty={"70px"}/>
                <div>
                    <div className="Links">
                        <NavLink to={"/Quienes-Somos"}>¿Quiénes somos?</NavLink>
                        <div></div>
                    </div>
                    <div className="Links">
                        <NavLink to={"/Farmacia"}>Farmacia</NavLink>
                        <div></div>
                    </div>
                    <div className="Links">
                        <NavLink to={"/Contactanos"}>Contáctanos</NavLink>
                        <div></div>
                    </div>
                </div>

            </div>

            <div className="lineNav"></div>
        </div>
    )
}

export default Nav