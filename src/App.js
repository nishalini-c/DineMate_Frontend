import React from 'react';

import { Routes, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Login from './components/Login'
import Register from './components/Register';
import Foodorder from './components/Foodorder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/login" element={ <Login/> } /> 
        <Route path="/register" element={ <Register/> } /> 
        <Route path="/foodorder" element={ <Foodorder/> } />
        {/* <Route path=""element={<Reservation/>}/> */}

   

       
       
       

        
     </Routes> 
    </div>
  )
}

export default App
