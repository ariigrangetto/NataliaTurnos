import { useState } from "react";
import ListTurnos from "./ListTurnos";
import "./Form.css"

export default function Form({setTurnos, turnos, showForm}) {
    const [name, setName] = useState("");
    const [motive, setMotive] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [seccion, setSeccion] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    showForm(false);
    const nuevoTurno = { nombre: name, motivo: motive, hora: time, fecha: date, seccion: seccion };

    const turnosActualizados = [...turnos, nuevoTurno].sort((a, b) =>{
      const fechaHoraA = new Date(`${a.fecha}T${a.hora}`);
      const fechaHoraB = new Date(`${b.fecha}T${b.hora}`);
      return fechaHoraA - fechaHoraB;
    });

    setTurnos(turnosActualizados);

    setName("");
    setMotive("");
    setTime("");
    setDate("");
  };

  //para hacer sort se puede hace fuera del array mutado ya que si lo uso fuera, estaria duplicando y no mutando el array de turnos

  //hooks de react no se pueden utilizar dentro de funciones a menos de que se un customhook

  return (
    <>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre de clienta: </label>
            <input
              type='text'
              id='nombre'
              className='form-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Giovanna Grangetto...'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='seccion'>Sección:</label>
            <select id='seccion' className='form-input'
            value={seccion}
            onChange={(e) => setSeccion(e.target.value)}>
              <option value="" disable selected>Elige una sección</option>
              <option value='Uñas'>Uñas</option>
              <option value='Peluquería'>Peluquería</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='motivo'>Motivo de turno:</label>
            <input
              type='text'
              id='motivo'
              className='form-input'
              value={motive}
              onChange={(e) => setMotive(e.target.value)}
              placeholder='Uñas: Kapping'
            />
          </div>

          <div className='form-row'>
            <div className='form-group half'>
              <label htmlFor='hora'>Fecha</label>
              <input
                type='date'
                id='date'
                className='form-input'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className='form-group half'>
              <label htmlFor='fecha'>Hora</label>
              <input
                type='time'
                id='time'
                className='form-input'
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <button type='submit' className='form-button'>
            Guardar turno
          </button>
        </form>

    </>
  );
}
