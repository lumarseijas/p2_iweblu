import { useState } from 'react'
import { useEffect } from 'react';
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

  //no me sale bien lo de las rutas

  return (

    <div id="main">
      <Header />
      <div id="loading">
        <img
          className="spinner"
          src={process.env.PUBLIC_URL + "/spinner.gif"}

        />
      </div>

    </div>
  )

}
export default App