import React from "react";


type Props = {
    contentButton: string
}

const Button:React.FC<Props> = (props) => {


    return (
        <button className="font-normal px-5 py-3 rounded border hover:border-transparent text-cake hover:text-cake-200 bg-brown-200 hover:bg-brown active:bg-brown-200 transition delay-0 ease-in">
            {props.contentButton ? props.contentButton : 'Mas Información'}
        </button>
    );
}

export default Button;