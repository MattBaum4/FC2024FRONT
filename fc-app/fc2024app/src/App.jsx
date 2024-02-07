import "./app.css";
import React from "react";
import NavigationBar from "./components/navbar-section/NavigationBar.jsx";
import BodySection from "./components/body-section/Body.jsx";
import BookOnlineSection from "./components/book-section/Book.jsx";
import AboutSection from "./components/about-section/About.jsx";
function App() {
  return (
    <div>
      <NavigationBar />
      <BodySection />
      <AboutSection />
      <BookOnlineSection />
    </div>
  );
}

export default App;
