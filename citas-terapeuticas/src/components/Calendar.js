import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ appointments, patients, therapists }) => {
  const events = appointments.map((appointment, index) => {
    const patient = patients.find(p => p.id === appointment.patientId);
    const therapist = therapists.find(t => t.id === appointment.therapistId);
    return {
      id: index,
      title: `${patient?.name} con ${therapist?.name}`,
      start: new Date(appointment.date),
      end: new Date(appointment.date),
    };
  });

  return (
    <div>
      <h2>Calendario de Citas</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
