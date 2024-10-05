import { useParams, useNavigate } from 'react-router-dom';
import Location from './Location';
import { mockdata } from './constants/products'

export default function Producto(props) {

    const { productId } = useParams();
    const navigate = useNavigate()

    const producto = mockdata.products[productId] ; 

    const handleVolver = () => {
        navigate('/');
    };

    return (
        <div>
            <h1 id="titulo">{producto.title}</h1>
            <button id="volver" onClick={handleVolver}>Volver</button>
            <Location />
        </div>
    );
}