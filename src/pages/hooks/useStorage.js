import { useEffect, useState } from "react";

export default function useStorage() {
  const [turnos, setTurnos] = useState(() => {
    const saveTurno = localStorage.getItem("turnos");
    return saveTurno ? JSON.parse(saveTurno) : [];
  });

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  return { turnos, setTurnos };
}
