import { useState } from "react"
import { Logo } from "./Logo";

export function NavResponsive() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (): void => {
        setIsChecked((prev) => !prev);
    };

    return(
        <header
                        className="w-full bg-cake flex sm:flex md:flex lg:hidden xl:hidden 
                    fixed top-0 left-0 px-5 justify-between items-center z-10"
                    >
                        <Logo/>

                        <input
                            type="checkbox"
                            id="check"
                            checked={isChecked}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="check"
                            className={`icons right-[5%] absolute text-4xl cursor-pointer inline-flex lg:block `}
                        >
                            <i
                                className={`bx bx-menu ${
                                    isChecked ? "hidden" : "block"
                                }`}
                            ></i>
                            <i
                                className={`bx bx-x block ${
                                    isChecked ? "block" : "hidden"
                                }`}
                            ></i>
                        </label>

                        <nav className={`navbar -z-50 bg-cake *:text-lg *:my-6 *:font-medium *:no-underline *:block shadow-2xl absolute text-center top-full left-0 h-0 w-full overflow-hidden `}>
                            <a href="#" className="link-0 hover:text-brown-200">Productos</a>
                            <a href="#" className="link-1 hover:text-brown-200">8 KG 2 meses</a>
                            <a href="#" className="link-2 hover:text-brown-200">Corriendo x Seguidores</a>
                            <a href="#" className="link-3 hover:text-brown-200">Contacto</a>
                            <a href="#" className="link-4 hover:text-brown-200">Sobre Nosotros</a>
                        </nav>
                    </header>
    )
}