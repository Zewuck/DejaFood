import "../index.css";
import "../style.css";
import { NavResponsive } from "./Nav-Responsive";
import { Nav } from "./Nav";

export function Navbar() {

    return (
        <>
            <header>
                <NavResponsive/>
                <Nav/>
            </header>
        </>
    );
}
