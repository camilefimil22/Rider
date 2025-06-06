import { useState } from 'react'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Ubicacion from './page/Ubicacion.jsx';
import Bebidas from './page/Bebidas.jsx';
import { Link } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import {menu} from './data.js'


export default function App() {
  return (
      <>
    <nav className='flex justify-center text-white w-full '>
    <ul style={{display: 'flex', gap: '60px' }}>
    <li><Link to= '/'>Inicio</Link></li>
    <li><Link to= 'Menu'>Menu</Link></li>
    <li><Link to= 'Bebidas'>Bebidas</Link></li>
    <li><Link to= 'Menuinclusivo'>Menu Inclusivo</Link></li>
    <li><Link to= 'Ubicacion'>Ubicacion</Link></li>

    </ul>
  </nav>
   <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="menu" element={<Menu />} />
          <Route path="Bebidas" element={<Bebidas />} />
          <Route path="menuinclusivo" element={<Menuinclusivo />} />
          <Route path="ubicacion" element={<Ubicacion />} />
          

        </Routes>   
      </>
  )
}
