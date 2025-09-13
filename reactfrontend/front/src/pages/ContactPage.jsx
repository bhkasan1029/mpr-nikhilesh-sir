import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
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

            <main className="contact-main">
                <h2>Contact Us</h2>
                <p>
                    Reach out to us for any questions, suggestions, or collaboration opportunities.
                    We’d love to hear from you!
                </p>
            </main>

            <footer>
                © 2025 CampusX Committee. All Rights Reserved.
            </footer>
        </>
    );
}
