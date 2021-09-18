import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import React from "react";

const NewCal = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      events={[
        { title: "event 1", date: "2021-09-01" },
        { title: "event 2", date: "2021-09-18" },
      ]}
      initialView="dayGridMonth"
    />
  );
};

export default NewCal;
