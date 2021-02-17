import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navitem(prop) {
    return (
        <Route>
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={prop.link}> {prop.item} </Link>
                    </li>
                </ul>
        </Route>
    )
}