import * as React from "react";
import "./calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarSection = () => {
  return (
    <>
      <div className="calendar-contain">
        <FullCalendar
        plugins={[dayGridPlugin]} 
        initialView="dayGridMonth" 
        />
      </div>
    </>
  );
};
//maybe google form here instead 
export default CalendarSection;
