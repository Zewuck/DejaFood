import logo from "../Images/logo-removebg.png";


export function Logo() {
    return (
        <img
            src={logo}
            className="w-24 h-28"
            alt="logo"
        />
    );
}

export function Logo32() {
    return (
        <img
            src={logo}
            className="w-32 h-32"
            alt="logo"
        />
    );
}
