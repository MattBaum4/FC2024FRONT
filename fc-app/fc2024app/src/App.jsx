import "./app.css";
import React from "react";
import NavigationBar from "./components/navbar-section/NavigationBar.jsx";
import BodySection from "./components/body-section/Body.jsx";
function App() {
  return (
    <div>
      <NavigationBar />
      <BodySection />
    </div>
  );
}

export default App;
