import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timerGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Calender = () => {
    return (
        <div className="justify-center flex">
            <div className="container min-h-screen">
                <div className="bg-[#151030] bg-opacity-70 backdrop-blur text-white my-10">
                    <FullCalendar plugins={[dayGridPlugin, timerGridPlugin, interactionPlugin]} initialView={'dayGridMonth'} headerToolbar={{
                        start: "today prev,next",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay",
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Calender;