import "./app.css";
import React from "react";
import NavigationBar from "./components/navbar-section/NavigationBar.jsx";
import BodySection from "./components/body-section/Body.jsx";
import BookOnlineSection from "./components/book-section/Book.jsx";
import AboutSection from "./components/about-section/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactSection from "./components/contact-section/Contact.jsx";
import CalendarSection from "./components/calendar-section/Calendar.jsx";
import ServiceAreaSection from "./components/serviceArea-section/ServiceArea.jsx";
import FooterSection from "./components/footer-section/Footer.jsx";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
function App( {children}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <div>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<BodySection/>}/> {/* This is the main page */}
        <Route exact path="/contact" element={<ContactSection/>}/>
        <Route exact path="/calendar" element={<CalendarSection/>}/>
        <Route exact path="/service-area" element={<ServiceAreaSection/>}/>
      </Routes>
      <AboutSection />
      <BookOnlineSection />
      <FooterSection />
      {children}
       
      </div>
    </Router>
    </LocalizationProvider>
  );
}

export default App;
