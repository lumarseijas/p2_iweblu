export default function Lista({ props }) {

    return (
        <div id="productosresultados">
            <ul>
                {productos.map((producto, index) =>
                <li key ={index} className="unproducto">

                </li>

                )}
            

            </ul>
        </div>
    )
}