import React, { createContext, ReactNode } from "react"
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'

type Images = {
    image1: string;
    image2: string;
}

export const InfoContext = createContext<Images>({ image1: img1, image2: img2 })
type InfoContextProviderProps = {
    children: ReactNode;
}

export function InfoContextProvider(props: InfoContextProviderProps) {
    

    const images:Images = {
        image1: img1,   
        image2: img2
    }
    return(
        <InfoContext.Provider value={images}>
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoContext