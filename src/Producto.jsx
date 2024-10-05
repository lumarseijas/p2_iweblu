import { useParams, useNavigate } from 'react-router-dom';
import Location from './Location'; 

export default function Producto({ theproducts }) {
    const { productId } = useParams(); // Obtener productId desde la URL
    const navigate = useNavigate();
    const producto = theproducts[productId]; // Encontrar producto por posición

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
