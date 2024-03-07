import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

const CardSecondRow = () => {
    const image = useContext(InfoContext);

    return (
        <>
            <section className="justify-center w-full h-full lg:px-[10%] lg:pt-2 ">
                <div className="grid gap-x-1 md:grid-cols-2 h-full w-full">
                    <div className="w-full h-full p-5">
                        <article className="flex">
                            <Card
                                img={image.image2}
                                title="8KG En 2 Meses¡¡"
                                ds="Se escucha increible pero es cierto, ¡Puedes obtener estos resultados"
                            />
                        </article>
                    </div>
                    <div className="w-full h-full p-5">
                        <article className="flex">
                            <Card
                                img={image.image1}
                                title="Hola cuarto Titulo"
                                ds="cuarta descripcionm"
                            />
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardSecondRow;
