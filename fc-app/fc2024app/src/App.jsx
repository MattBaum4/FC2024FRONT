import "./app.css";
import React from "react";
import NavigationBar from "./components/navbar-section/NavigationBar.jsx";
import BodySection from "./components/body-section/Body.jsx";
import BookOnlineSection from "./components/book-section/Book.jsx";
import AboutSection from "./components/about-section/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactSection from "./components/contact-section/Contact.jsx";

function App() {
  return (
    <Router>
      <div>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<BodySection/>}/> {/* This is the main page */}
        <Route exact path="/contact" element={<ContactSection/>}/>
      </Routes>
      <AboutSection />
      <BookOnlineSection />
      

       
      </div>
    </Router>
  );
}

export default App;
