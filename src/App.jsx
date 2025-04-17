import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Turnos from './pages/Turnos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Turnos" element={<Turnos />} /> {/* 👈 Agregá esta ruta */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
