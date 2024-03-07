import Card from "./Card";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

const Cards = () => {
    const { image1, image2 } = useContext(InfoContext);

    return (
        <>
            <section className="justify-center w-full h-full lg:px-[10%] md:pt-2">
                <div className="grid gap-x-1 md:grid-cols-2 h-full w-full">
                    <div className="w-full h-full p-5">
                        <article className="flex">
                            <Card
                                img={image1}
                                title="Hola Primer Titulo"
                                ds="Primera descripcionm"
                                contentButton="Primer Botón"
                            />
                        </article>
                    </div>
                    <div className="w-full h-full p-5">
                        <article className="flex">
                            <Card
                                img={image2}
                                title="Hola Segundo Titulo"
                                ds="Segunda descripcionm"
                                contentButton="Segundo Botón"
                            />
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cards;
