// src/App.js
import React, { useState } from 'react';
import './App.css';
import PatientList from './components/PatientList';
import TherapistList from './components/TherapistList';
import AppointmentForm from './components/AppointmentForm';
import MyCalendar from './components/Calendar';
import TerapistRegister from './components/TerapistRegister';
import PatientRegister from './components/PatientRegister';

const App = () => {
  const [patients] = useState([
    { id: 1, name: 'Paciente 1' },
    { id: 2, name: 'Paciente 2' },
  ]);

  const [therapists] = useState([
    { id: 1, name: 'Terapeuta 1' },
    { id: 2, name: 'Terapeuta 2' },
  ]);

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div className="App">
      <h1>Sistema de Citas Terapéuticas</h1>
      <PatientList patients={patients} />
      <TherapistList therapists={therapists} />
      <AppointmentForm
        patients={patients}
        therapists={therapists}
        addAppointment={addAppointment}
      />
      <MyCalendar
        appointments={appointments}
        patients={patients}
        therapists={therapists}
      />
      <hr/>
      <h3>PRUEBAS FORMULARIOS</h3>
      <TerapistRegister/>
      <PatientRegister/>
    </div>
  );
};

export default App;
