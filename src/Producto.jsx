import { useParams, useNavigate } from 'react-router-dom';
import Location from './Location'; 

export default function ProductPage({ props }) {

    const { productId } = useParams(); 
    const navigate = useNavigate();
    
    const handleVolver = () => {
        navigate('/'); // Volver a la página principal
    };

    return (
        <div>
            <h1 id="titulo">{producto.title}</h1>
            <button id="volver" onClick={handleVolver}>Volver</button>
            <Location />
        </div>
    );
}
