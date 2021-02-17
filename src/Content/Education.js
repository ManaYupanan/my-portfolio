import React, { Component } from "react";
import Widecard from "../Component/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="container my-4">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Business Computer" where="Naresuan University" from="2017" to="Present" url="/images/logonu.png"/>
                <Widecard title="Language-Arts Program" where="Khanu Wittaya" from="2014" to="2017" url="/images/logokhanu.jpg"/>
            </div>
        )
    }
}

export default Education;