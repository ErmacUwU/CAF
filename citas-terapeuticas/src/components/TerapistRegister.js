import React from 'react'
import '../components/TerapistRegister.css';

const TerapistRegister = () => {
  return (
   <form>
    <label for="nombre">Nombre</label>
    <input type="email"/>
    <label for="apellidos">Apellidos</label>
    <input type="apellidos"/>
    <label for="nacimiento">Fecha de Nacimiento</label>
    <input type="date"/>
    <label for="sexo">Sexo</label>
    <select>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
    </select>
   </form>
  )
}

export default TerapistRegister