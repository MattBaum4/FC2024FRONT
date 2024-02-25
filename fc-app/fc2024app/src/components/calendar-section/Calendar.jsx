import * as React from "react";
import "./calendar.css";
import { InlineWidget } from "react-calendly";

const CalendarSection = () => {
  return (
    <>
      <div className="calendar-contain">
      <div className="Apcal">
      <InlineWidget 
      url="https://calendly.com/futurecruisetest"
      styles={{
        height: '100vh',
        marginTop: '-20px'
      }} />
    </div>
      </div>
    </>
  );
};

export default CalendarSection;
