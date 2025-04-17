import "animate.css";
import "./Home.css"
import Turnos from "./Turnos";
import { useNavigate } from "react-router-dom";

export default function Home (){
    const navigate = useNavigate();

    const turnosPage = () =>{
        navigate("/Turnos")
    }


    return(
       <>
       <div className="presentation">
       <img className="icon" src="src/assets/icono.png.jpg" alt="ICON OF APP" />
       <h1 className="welcome-message animate__bounceIn">Bienvenida!</h1>
       </div>
       <button onClick={turnosPage} className="btn-ingresar">Ingresar</button>
       </>
    )
}