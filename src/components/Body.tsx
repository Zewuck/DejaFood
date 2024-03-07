import { Carrousel } from "./Carrousel";
import Cards from "./Cards";
import CardSecondRow from "./CardSecondRow";

export function Body() {
    return (
        <>
            <section className="bg-body">
                <Carrousel />
                <Cards />
                <CardSecondRow />
                <Cards />
            </section>
        </>
    );
}
