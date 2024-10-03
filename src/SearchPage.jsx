import { useState } from 'react';
import Card from 'react-bootstrap/Card';
export default function SearchPage(props) {

    //const theproducts = props.theproducts;
    const [productos, setProductos] = useState(props.theproducts);
    const [filtro, setFiltro] = useState('')
    //function filtrar() {
        // setProductos(props.theproducts.filter)

   // }

    const handleBuscar = () => {
        const resultados = theproducts.filter(producto =>
            producto.Title.toLowerCase().includes(filtro.toLowerCase())
          );
          setProductos(resultados);
        };
    return (
        <div>
            <h2 id="catálogo">Catálogo</h2>
            <input type="text" id="filtro" onChange={(e) => setFiltro(e.target.value)} />
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