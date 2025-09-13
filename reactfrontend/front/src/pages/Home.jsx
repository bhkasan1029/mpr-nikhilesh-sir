import "./Home.css";

export default function Home() {
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

            <section className="hero">
                <div className="hero-text">
                    <h2>
                        Bold Ideas<br /> Big Events
                    </h2>
                    <p>
                        Your one-stop hub to explore committees and events across campus —
                        cultural fests, tech summits, and everything in between.
                    </p>
                    <button>Explore Events</button>
                </div>
                <div className="hero-img">
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                        alt="Event crowd"
                    />
                    <span className="tagline">#GoBeyond</span>
                </div>
            </section>

            <footer>© 2025 CampusX Committee. All Rights Reserved.</footer>
        </>
    );
}
