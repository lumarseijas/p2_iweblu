import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import config from './config/config.js';
import Header from "./Header"
import SearchPage from './SearchPage';
import Producto from './Producto';
import NoMatch from './NoMatch';
import { mockdata } from './constants/products'
import './App.css'

function App() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProductos = async () => {
    if (config.use_server) {
      try {
        const response = await fetch(config.server_url);
        const data = await response.json();
        setProductos(data.products);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  fetchProductos();
}, [config.use_server, config.server_url]);

  return (
    
    <div id="main">
      {loading && ( <div id="loading">
        <img className="spinner" src={"/spinner.gif"} />
        </div>
      )
    }
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage theproducts={productos} />} />
        <Route path="/products/:productId" element={<Producto product={productos}/>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </div>

  )

}
export default App