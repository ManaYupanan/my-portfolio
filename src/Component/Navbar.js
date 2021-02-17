import React from "react";
import Navitem from "./Navitem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar(prop) {
    return (
        
        <div className="container ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <Navitem item="Home" link="/" />
                    <Navitem item="About" link="/about" />
                    <Navitem item="Eduction" link="/education" />
                    <Navitem item="Skill" link="/skill" />
                    <Navitem item="Contact" link="/contact" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;