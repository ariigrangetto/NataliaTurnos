import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Turnos from './pages/Turnos'
import TempHome from './pages/TempHome'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TempHome />} />
        <Route path="/Turnos" element={<Turnos />} /> {/* 👈 Agregá esta ruta */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
