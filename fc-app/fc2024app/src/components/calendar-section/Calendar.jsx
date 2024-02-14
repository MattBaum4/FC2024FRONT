import "./calendar.css"
import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
const CalendarSection = () => {
   //date picker
    const [startDate, setStartDate] = useState(new Date());

    return ( 
        <>
        <div></div>
        <DatePicker
        className="date-picker"
        selected={startDate}
         onChange={(date) => setStartDate(date)} 
         showTimeSelect 
         dateFormat="Pp"
         />
        </>
     );
}
 
export default CalendarSection;