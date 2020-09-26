import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import vin from './vin.png';
import "./styles.css";
import "./sty.css";
function nav() {

    return (
        <div style={{ backgroundColor: "#c1e1c5" }}>
            <img className="photo" src={vin} alt="Vin" />
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg> Vinay Muppala /
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/"><p style={{ color: '#BBE3CF' }}>Home</p></Link>

                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/resume"><p style={{ color: '#BBE3CF' }}>Resume</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/portf"><p style={{ color: '#BBE3CF' }}>Portfolio</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/about"><p style={{ color: '#BBE3CF' }}>About</p></Link>

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="navbar-brand">
                                    <Link to="/contact"><p style={{ color: '#BBE3CF' }}>Contact</p></Link>

                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default nav;