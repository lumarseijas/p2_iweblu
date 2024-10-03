import { useState } from 'react';
import Card from 'react-bootstrap/Card';
//import Form from 'react-bootstrap/Form';

export default function SearchPage(props) {

    //const theproducts = props.theproducts;
    const [productos, setProductos] = useState(props.theproducts);
    const [filtro, setFiltro] = useState('')
    const [categoria, setCategoria] = useState('All'); 
//Ctrl + K seguido de Ctrl + C para comentar, y Ctrl + K seguido de Ctrl + U para descomentar
//      Extraer categorías únicas usando reduce
//   const categorias = theproducts.reduce((acc, producto) => {
//     if (!acc.includes(producto.Category)) {
//       acc.push(producto.Category);
//     }
//     return acc;
//   }, []);

//     function filtrar(productos, filtro) {
//         return productos.filter(producto =>
//             producto.Title.toLowerCase().includes(filtro.toLowerCase())
//         )
//     }
//     function filtrarCategorias(productos, categoria) {
//         return productos.filter(producto => producto.Category === categoria);
//     };

    const handleBuscar = () => {
        let productosFiltrados = filtrar(theproducts, filtro);
        productosFiltrados = filtrarCategorias(productosFiltrados, categoria);
        setProductos(productosFiltrados);
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