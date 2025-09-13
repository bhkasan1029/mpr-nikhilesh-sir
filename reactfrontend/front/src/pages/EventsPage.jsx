import { useState, useEffect } from "react";
import "./EventsPage.css";

// Dummy events data
const dummyEvents = [
    { id: 1, title: "Tech Fest 2025", description: "A festival of coding, robotics, and AI!", poster: "https://via.placeholder.com/400x250?text=Tech+Fest" },
    { id: 2, title: "Cultural Night", description: "Music, dance, drama, and fun for everyone!", poster: "https://via.placeholder.com/400x250?text=Cultural+Night" },
    { id: 3, title: "Workshop on React", description: "Learn React in one day with hands-on projects.", poster: "https://via.placeholder.com/400x250?text=React+Workshop" },
    { id: 4, title: "Hackathon", description: "Build innovative projects in 24 hours.", poster: "https://via.placeholder.com/400x250?text=Hackathon" },
    { id: 5, title: "Art Exhibition", description: "Showcase your creativity with paintings and sculptures.", poster: "https://via.placeholder.com/400x250?text=Art+Exhibition" },
    { id: 6, title: "Sports Meet", description: "Compete in various sports and games.", poster: "https://via.placeholder.com/400x250?text=Sports+Meet" }
];

export default function EventsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselEvents = dummyEvents.slice(0, 5);

    const nextEvent = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselEvents.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselEvents.length) % carouselEvents.length);
    };

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextEvent();
        }, 6000); // 3000ms = 3s
        return () => clearInterval(interval); // cleanup on unmount
    }, []);

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


            <div>
                <h2 className="main-heading">UPCOMING EVENTS</h2>

                {/* Carousel */}
                <div className="carousel">
                    <button className="carousel-btn left" onClick={prevEvent}>&lt;</button>

                    <div className="car-event-card">
                        <img src={carouselEvents[currentIndex].poster} alt={carouselEvents[currentIndex].title} />
                        <h3>{carouselEvents[currentIndex].title}</h3>
                        <p>{carouselEvents[currentIndex].description}</p>
                    </div>

                    <button className="carousel-btn right" onClick={nextEvent}>&gt;</button>
                </div>

                <div className="events-container">
                    {/* All Events */}
                    <h2 className="heading">All Events</h2>
                    <div className="all-events">
                        {dummyEvents.map((event) => (
                            <div key={event.id} className="event-card small">
                                <img src={event.poster} alt={event.title} />
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer>© 2025 CampusX Committee. All Rights Reserved.</footer>
        </>
    );
}
