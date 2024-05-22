import React from 'react';

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Pacientes</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
