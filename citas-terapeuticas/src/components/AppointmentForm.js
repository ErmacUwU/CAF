import React, { useState } from 'react';

const AppointmentForm = ({ patients, therapists, addAppointment }) => {
  const [patientId, setPatientId] = useState('');
  const [therapistId, setTherapistId] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ patientId, therapistId, date });
    setPatientId('');
    setTherapistId('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Cita</h2>
      <label>
        Paciente:
        <select value={patientId} onChange={(e) => setPatientId(e.target.value)}>
          <option value="">Seleccionar</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
      </label>
      <label>
        Terapeuta:
        <select value={therapistId} onChange={(e) => setTherapistId(e.target.value)}>
          <option value="">Seleccionar</option>
          {therapists.map((therapist) => (
            <option key={therapist.id} value={therapist.id}>{therapist.name}</option>
          ))}
        </select>
      </label>
      <label>
        Fecha:
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Agregar Cita</button>
    </form>
  );
};

export default AppointmentForm;
