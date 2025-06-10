import { useState } from 'react'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Ubicacion from './page/ubicacion/Ubicacion.jsx';
import { Routes,Route, Link} from 'react-router';


export default function App() {
  return (

    <div className='grid grid-cols-1 grid-rows-4 gap-1'>
  
   
    <nav>
    <ul className='flex gap-6 h-4'>
    <li><Link to= '/'>Inicio</Link></li>
    <li><Link to= '/about'>Menu</Link></li>
    <li><Link to= '/contact'>Menu Inclusivo</Link></li>
    <li><Link to= '/terapia'>Ubicacion</Link></li>

    </ul>
  </nav>
   <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<Menu />} />
          <Route path="/contact" element={<Menuinclusivo />} />
          <Route path="/terapia" element={<Ubicacion />} />
        </Routes>
  
    </div>
  )
}
