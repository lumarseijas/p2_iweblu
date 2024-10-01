export default function SearchPage(props) {
  
  const theproducts = props.theproducts;
  
    return (
    <div>
      <h2 id="catálogo">Catálogo</h2>
      <input type="text" id="filtro" />
      <button id="buscador">Buscar</button>
    </div>
  );
}