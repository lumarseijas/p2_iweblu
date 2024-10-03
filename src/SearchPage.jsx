import Card from 'react-bootstrap/Card';
export default function SearchPage(props) {

    //const theproducts = props.theproducts;
    const [productos, setProductos] = useState(props.theproducts);
    function filtrar() {
        // setProductos(props.theproducts.filter)

    }

    const handleBuscar = () => {


    }
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