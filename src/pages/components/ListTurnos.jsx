import React, { useMemo } from "react";
import "../ListTurnos.css"
const ListTurnos = React.memo(({deleteTurno, turnos}) => {
    //utilizamos el React.Mmeo para evitar que se re renderice si sus props no han cambiado

    const turnosOrdenados = useMemo(()=>{
        console.log("Memoizano")
        return [...turnos].sort((a,b) => {
            const fechaHoraA = new Date (`${a.fecha}T${a.hora}`);
            const fechaHoraB = new Date (`${b.fecha}T${b.hora}`);
            return fechaHoraA - fechaHoraB;
        });
    }, [turnos]);
    //evitamos que se ordene cada que se renderiza el componente

    console.log(turnos);
    return(
        <>
        <h2>Turnos programados:</h2>
        {turnosOrdenados.length === 0 ?(
            <p>Ops! Parece que no hay turnos programados 😕</p>
        ) : <ul className="turnos-lista">
        {
            turnosOrdenados.map((turno, index) =>(
                <li key={index} className="turno-card">
                    <p><strong>🧖🏻‍♀️Nombre:</strong> {turno.nombre}</p>
                    <p><strong>💅🏻Seccion: </strong>{turno.seccion}</p>
                    <p><strong>📝Motivo: </strong>{turno.motivo}</p>
                    <p><strong>📅Fecha: </strong> {turno.fecha}</p>
                    <p><strong>⏰Hora: </strong> {turno.hora}</p>
                    <button className="btn-eliminar" onClick={() => deleteTurno(index)}>Eliminar turno</button>
                </li>
            ))
        }
    </ul> 
    }   
    </>
    )
})

export default ListTurnos;