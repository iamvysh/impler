import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import {context}  from "./utils/context"

// import './App.css'

function App() {

  const [cart,setcart]=useState([])
    

  const state={cart,setcart}

  return (
    <>

<context.Provider  value={state}> 
<Routes>



  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>

  </Routes>
     
</context.Provider>
    </>
  )
}

export default App
