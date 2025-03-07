import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"

function Nav() {

    return (
        <header className="navbar">
            <div className="containerNav">
            <Logo width={"60px"} height={"60px"} className="logoBar"/>
                <div>
                    <div className="Links">
                        <NavLink to={"/QuienesSomos"}>¿Quiénes somos?</NavLink>
                        <div></div>
                    </div>
                    <div className="Links">
                        <NavLink to={"/Farmacia"}>Farmacia</NavLink>
                        <div></div>
                    </div>
                    <div className="Links">
                        <a href="https://wa.link/kgp6xy" target="_blank">Contáctanos</a>
                        <div></div>
                    </div>
                </div>

            </div>

            <div className="lineNav"></div>
        </header>
    )
}

export default Nav