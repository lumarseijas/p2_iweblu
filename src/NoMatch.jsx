export default function NoMatch(props) {
    const handleVolver = () => {
        navigate('/');
    };
    return (
        <div>
            <h3 id="info">Ruta no encontrada</h3>
            <button id="volver" onClick={handleVolver}>Volver</button>
        </div>)
}