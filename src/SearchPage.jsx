import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSearchParams } from 'react-router-dom';
import Location from './Location';

export default function SearchPage(props) {
    const [productos, setProductos] = useState(props.theproducts);
    //const [filtroTexto, setFiltroTexto] = useState('');
    //const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const categoriaSeleccionada = searchParams.get('category') || 'All';

    const categoriasUnicas = Array.from(new Set(props.theproducts.map(producto => producto.category))); //dice que props.theproducts.map no es una funcion: 
    //pq props.theproducts en el momento de llamar a la funcion no es un array
    
    //filtrar productos según la búsqueda y la categoría:
    useEffect(() => {
        const filtroTexto = document.getElementById('filtro').value.toLowerCase();
        const productosFiltrados = props.theproducts.filter((producto) => {
            const enCategoria = categoriaSeleccionada === 'All' || producto.category === categoriaSeleccionada;
            const enBusqueda = producto.title.toLowerCase().includes(filtroTexto);
            return enCategoria && enBusqueda;
        });
        setProductos(productosFiltrados);
    }, [categoriaSeleccionada, props.theproducts]);

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

            <select id="selector" value={categoriaSeleccionada} onChange={(e) => setSearchParams({category: e.target.value})}>
                <option value="All">All</option>
                {categoriasUnicas.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>

            <div id="productosresultados">
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index} className="unproducto">
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                            </Card.Body>
                        </li>
                    ))}
                </ul>
            </div>
            <Location />
        </div>
    );
}
