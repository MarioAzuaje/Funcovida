import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"

function Nav() {

    return (
        <div className="navbar">
            <div className="containerNav">
                <Logo Widthx={"70px"} Heighty={"70px"}/>
                <div>
                    <NavLink to={""}>¿Quiénes somos?</NavLink>
                    <NavLink to={""}>Farmacia</NavLink>
                    <NavLink to={""}>Contáctanos</NavLink>
                </div>

            </div>

            <div className="lineNav"></div>
        </div>
    )
}

export default Nav