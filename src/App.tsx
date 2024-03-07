import React from "react";
import { Navbar } from "./components/Navbar";
import { MarginTop } from "./components/MarginTop";
import { Body } from "./components/Body";
import "./index.css";
import './style.css'

function App() {
    return (
        <>
            <Navbar />
            <MarginTop />
            <Body />
        </>
    );
}

export default App;
