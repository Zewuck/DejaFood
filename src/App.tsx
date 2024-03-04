import React from "react";
import { Navbar } from "./components/Navbar";
import { MarginTop } from "./components/MarginTop";
import { Carrousel } from "./components/Carrousel";
import "./index.css";
import './style.css'

function App() {
    return (
        <>
            <Navbar />
            <MarginTop />
            <Carrousel />
        </>
    );
}

export default App;
