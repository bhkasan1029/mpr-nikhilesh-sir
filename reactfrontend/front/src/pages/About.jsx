import React from "react";
import "./About.css";

export default function About() {
    return (
        <>
            <header>
                <h1>CampusX</h1>
                <nav>
                    <a href="../home">Home</a>
                    <a href="../about">About</a>
                    <a href="../login">Login</a>
                    <a href="../events">Events</a>
                    <a href="../contact">Contact</a>
                </nav>
            </header>

            <main className="about-main">
                <h2>About CampusX</h2>
                <p>
                    CampusX is a college and committee management system built as a full-stack MERN project.
                    It allows students to explore committees, view and upload events, and connect with peers across campus.
                </p>
                <h3>Developed by:</h3>
                <ul>
                    <li>Ashish</li>
                    <li>Bhumi</li>
                    <li>Chirag</li>
                    <li>Ryan</li>
                </ul>
            </main>

            <footer>
                © 2025 CampusX Committee. All Rights Reserved.
            </footer>
        </>
    );
}
