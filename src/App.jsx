import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Products from './views/Products'
import Product from './components/Product'
import Users from './views/Users'
import Customers from './views/Customers'
import { Routes,Route } from 'react-router-dom'



function App() {
  

  return (
    <>
      
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        
       
        
      </Routes>
      <Footer/>
      
     
     
      
      
      
     
     
    </>
  )
}

export default App
