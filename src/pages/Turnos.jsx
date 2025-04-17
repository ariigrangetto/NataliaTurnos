import { useState } from "react";
import "./Turnos.css";
import Form from "./components/Form";
import ListTurnos from "./components/ListTurnos";
import useStorage from "./hooks/useStorage";

export default function Turnos() {
  const [showFormulario, setShowFormulario] = useState(false);
  const {turnos, setTurnos} = useStorage();


  const toggleFormulario = () => {
    setShowFormulario(!showFormulario);
  };

  const deleteTurno = (index) =>{
    const nuevosTurnos = turnos.filter((_, i) => i !==index);
    setTurnos(nuevosTurnos);
  }


  return (
    <>
      <div className='presentacion-nav'>
        <h1 className='nuevo-turno'>Aquí se mostrarán todos tus turnos 🌸</h1>
      </div>
      <button onClick={() => toggleFormulario()} className='btn-nuevoTurno'>
        Agregar nuevo turno
      </button>
      {showFormulario && <Form setTurnos={setTurnos} turnos={turnos} showForm={setShowFormulario}/>}
      <ListTurnos turnos={turnos} deleteTurno={deleteTurno}/>
    </>
  );
}
