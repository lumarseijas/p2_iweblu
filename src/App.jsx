import { useState } from 'react'
import Header from "./Header"
import SearchPage from './SearchPage';
import './App.css'
import {mockdata} from './constants/products'
function App() {
  

 
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