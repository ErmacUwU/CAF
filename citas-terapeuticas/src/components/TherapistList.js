import React from 'react';

const TherapistList = ({ therapists }) => {
  return (
    <div>
      <h2>Terapeutas</h2>
      <ul>
        {therapists.map((therapist) => (
          <li key={therapist.id}>{therapist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TherapistList;
