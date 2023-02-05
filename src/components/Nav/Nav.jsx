import React from "react";
import './nav.css';

function Nav() {
    return (
        <React.Fragment>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src="logo.png"></img>
                        <h3>Pet-Location</h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Graphics</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                                <ul>
                                    <li>
                                        <a href="#">Graphic</a>
                                    </li>
                                    <li>
                                        <a href="#">Web</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                                <ul>
                                    <li>
                                        <a href="#">Map</a>
                                    </li>
                                    <li>
                                        <a href="#">Form</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export { Nav };
