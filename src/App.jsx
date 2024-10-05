import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import config from './config/config.js';
import Header from "./Header"
import SearchPage from './SearchPage';
import Producto from './Producto';
import Location from './Location'; //notsure
import NoMatch from './NoMatch';
import { mockdata } from './constants/products'
import './App.css'

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (

    <div id="main">

      <div id="loading">
        <img className="spinner" src={process.env.PUBLIC_URL + "/spinner.gif"} />
      </div>
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