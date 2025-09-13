import { useState } from "react";
import "./AddEvents.css"; // import the CSS file

export default function AddEvents() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, poster });
    alert("Event submitted! Check console.");
    setTitle("");
    setDescription("");
    setPoster(null);
  };

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

      <div className="container">
        <h2 className="heading">UPLOAD EVENT</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Event Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              required
            />
          </label>
          <label className="label">
            Event Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea"
              required
            />
          </label>
          <label className="label">
            Upload Poster:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPoster(e.target.files[0])}
              className="input"
            />
          </label>
          <button type="submit" className="button">Upload</button>
        </form>

      </div>
      <footer>
        © 2025 CampusX Committee. All Rights Reserved.
      </footer></>
  );
}
