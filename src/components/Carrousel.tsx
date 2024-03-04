import React, { useState } from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export function Carrousel() {
    type Urls = {
        url: string;
    };

    const slides: Urls[] = [
        {
            url: img1,
        },
        {
            url: img2,
        },
        {
            url: img1,
        },
        {
            url: img2,
        },
        {
            url: img1,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = ():void => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = ():void => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex:number):void => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="max-w-[1400px] h-[780px] w-full m-auto py-8 px-4 relative group">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                    }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                >
                    {/* left arrow */}

                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>

                    {/* Right arrow */}

                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
