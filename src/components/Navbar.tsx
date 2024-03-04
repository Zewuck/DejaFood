import "../index.css";
import "../style.css";
import { NavResponsive } from "./Nav-Responsive";
import { Nav } from "./Nav";

export function Navbar() {

    return (
        <>
            <header className="flex w-full h-full z-50">
                <NavResponsive/>
                <Nav/>
            </header>
        </>
    );
}
