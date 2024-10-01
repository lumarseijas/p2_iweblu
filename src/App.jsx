import { useState } from 'react'
import Header from "./Header"
import SearchPage from './SearchPage';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

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
