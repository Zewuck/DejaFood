import React from "react";
import Button from "./Button";

type Props = {
    img: string;
    title: string;
    ds: string;
    contentButton: string;
};

const Card: React.FC<Props> = (props) => {
    return (
        <>
            <div className="w-full bg-white min-h-full flex flex-col items-center justify-start overflow-hidden rounded border border-solid border-[#e1e1e1] shadow-md">
                <figure className="flex min-w-full h-full items-center justify-center relative">
                    <div
                        className="bg-cover h-auto min-h-48 min-w-full absolute left-0 right-0 top-0 bottom-0"
                        style={{
                            backgroundImage: `url(${props.img})`,
                        }}
                    />
                </figure>
                <div className="mt-44 py-5 lg:px-14 flex gap-12 items-center justify-between flex-grow flex-col">
                    <div className="p-5 inline-block text-center justify-center">
                        <h4 className="mb-3 font-bold text-2xl leading-normal border-box block">
                            {props.title}
                        </h4>
                        <p className="mb-3 leading-normal border-box block text-base">
                            {props.ds}
                        </p>
                    </div>
                    <div>
                        <Button contentButton={props.contentButton} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
