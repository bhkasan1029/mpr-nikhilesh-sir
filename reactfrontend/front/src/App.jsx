import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import AddEvents from './pages/AddEvents'
import EventsPage from "./pages/EventsPage";
import LoginPage from "./pages/LoginPage"
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<AddEvents />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />





        </Routes>
      </BrowserRouter>

      {Home}

    </>
  )
}

export default App
