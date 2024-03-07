import { Carrousel } from "./Carrousel";
import  Cards  from "./Cards";
import CardSecondRow from "./CardSecondRow";



export function Body() {
    return (
        <>
            <body>
                <Carrousel />
                <Cards/>
                <CardSecondRow />
            </body>
        </>
    );
}
