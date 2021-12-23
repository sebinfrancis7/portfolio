import React from 'react'

import './Navbar.scss'

function Navbar() {

    return (
        <nav className="nav-custom navbar navbar-expand-md fixed-top py-3" >
            <div className="container-fluid container ">
                <span className="navbar-brand"></span>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMoblieMenu" aria-controls="toggleMoblieMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="toggleMoblieMenu">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item px-3" >
                            <a className="nav-link nav-link-custom" aria-current="page" href="#homepage">Home</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link nav-link-custom" href="#about">About</a>
                        </li>
                        {/* <li className="nav-item px-3">
                            <a className="nav-link nav-link-custom" href="#skills">Skills</a>
                        </li> */}
                        <li className="nav-item px-3">
                            <a className="nav-link nav-link-custom" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link nav-link-custom" href="#projects">Projects</a>
                        </li>
                        {/* <li className="nav-item px-3">
                            <a className="nav-link nav-link-custom" href="#contact">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
