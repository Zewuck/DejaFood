import { Logo32 } from "./Logo";
import Button from "./Button";

export function Nav() {
    return (
        <nav
            role="navigation"
            aria-label="main-navigation"
            className="w-full justify-between gap-x-20 bg-cake flex flex-row items-stretch box-border z-50 fixed shadow-2xl"
        >
            <div className="w-4/5 mx-auto flex-row hidden sm:hidden md:hidden lg:flex xl:flex">
                <div className="inline-block lg:ml-2 xl:ml-2 ">
                    <Logo32 />
                </div>
                <div className="flex flex-col w-full items-stretch *:before:border-box ">
                    <div className="w-full flex justify-start items-stretch h-full *:before:border-box ">
                        <div className="w-2/3 flex h-full justify-start items-stretch *:before:border-box">
                            <div className="h-full flex items-center justify-center">
                                <a
                                    href="#"
                                    className="px-3 py-1 pt-2 text-sm hover:text-brown duration-300"
                                >
                                    Contacto
                                </a>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <a
                                    href="#"
                                    className="px-3 py-1 pt-2 text-sm hover:text-brown duration-300"
                                >
                                    Sobre Nosotros
                                </a>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="h-full flex justify-end items-center">
                                <div>
                                    <Button contentButton="A tu Hogar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex h-full justify-start items-stretch *:before:border-box">
                        <div className="h-full flex items-center justify-center px-3">
                            <a
                                href="#"
                                className="lg:text-lg py-1 decoration-neutral-800 cursor-pointer font-normal relative after:content-[''] after:bg-brown-200 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:absolute after:rounded-3xl after:duration-300 hover:after:w-[100%]"
                            >
                                Productos
                            </a>
                        </div>
                        <div className="h-full flex items-center justify-center px-3">
                            <a
                                href="#"
                                className="lg:text-lg py-1 decoration-neutral-800 cursor-pointer font-normal relative after:content-[''] after:bg-brown-200 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:absolute after:rounded-3xl after:duration-300 hover:after:w-[100%]"
                            >
                                8 KG 2 meses
                            </a>
                        </div>
                        <div className="h-full flex items-center justify-center px-3">
                            <a
                                href="#"
                                className="lg:text-lg py-1 decoration-neutral-800 cursor-pointer font-normal relative after:content-[''] after:bg-brown-200 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:absolute after:rounded-3xl after:duration-300 hover:after:w-[100%]"
                            >
                                Corriendo x seguidores
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
