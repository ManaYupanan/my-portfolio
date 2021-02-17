import React, { Component } from "react";
import Social from '../Component/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv container navbar-expand-lg my-4">
                <h1 className='subtopic'>Contact Me</h1>
                <div className="con-content my-4">
                    <h3>Email : kerrmanayupanan1443@gmail.com</h3>
                    <h3>tel : 061-8050125</h3>
                    <h3>Line : mana1443</h3>
                </div>
                <Social />
            </div>
        )
    }
}

export default Contact;