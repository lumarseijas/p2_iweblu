import { useState } from 'react';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';

export default function SearchPage(props) {

    //const theproducts = props.theproducts;
    const [productos, setProductos] = useState(props.theproducts);
    
//Ctrl + K seguido de Ctrl + C para comentar, y Ctrl + K seguido de Ctrl + U para descomentar

//     function filtrarCategorias(productos, categoria) {
//         return productos.filter(producto => producto.Category === categoria);
//     };

    const handleBuscar = () => {
        const filtroTexto = document.getElementById('filtro').value.toLowerCase();
        setProductos(props.theproducts.filter((producto) => {
            return producto.title.toLowerCase().includes(filtroTexto);
        }));
    };
    return (
        <div>
            <h2 id="catálogo">Catálogo</h2>
            <input type="text" id="filtro" />
            <button id="buscador" onClick={handleBuscar}>Buscar</button>

            <div id="productosresultados">
                <ul>
                    {productos.map((producto, index) =>
                        <li key={index} className="unproducto">
                            <Card.Body>
                                <Card.Title>{producto.Title}</Card.Title>
                            </Card.Body>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}