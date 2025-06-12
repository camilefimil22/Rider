import { useState } from 'react'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
<<<<<<< HEAD
import Ubicacion from './page/Ubicacion.jsx';
import Bebidas from './page/Bebidas.jsx';
import Tooltip from './componentes/Tooltips.jsx';
import { Link, Routes ,Route } from 'react-router';

=======
import Ubicacion from './page/ubicacion/Ubicacion.jsx';
import { Routes,Route, Link} from 'react-router';
>>>>>>> origin/featDaiana


export default function App() {
  return (
<<<<<<< HEAD
      <>
    <nav className='flex justify-center text-white w-full '>
    < ul style={{display: 'flex', gap: '60px' }} >
    <li><Link to= '/'>Inicio</Link></li>
    <li><Link to= 'Menu'>Menú</Link></li>
    <li><Link to= 'Bebidas'>Bebidas</Link></li>
    <li><Link to= 'Menuinclusivo'>Menú Inclusivo</Link></li>
    <li><Link to= 'Ubicacion'>Ubicación</Link></li>
=======

    <div className='grid grid-cols-1 grid-rows-4 gap-1'>
  
   
    <nav>
    <ul className='flex gap-6 h-4'>
    <li><Link to= '/'>Inicio</Link></li>
    <li><Link to= '/about'>Menu</Link></li>
    <li><Link to= '/contact'>Menu Inclusivo</Link></li>
    <li><Link to= '/terapia'>Ubicacion</Link></li>

>>>>>>> origin/featDaiana
    </ul>

  </nav>
     
   <Routes>
          <Route path="/" element={<Inicio />} />
<<<<<<< HEAD
          <Route path="Menu" element={<Menu />} />
          <Route path="Bebidas" element={<Bebidas />} />
          <Route path="menuinclusivo" element={<Menuinclusivo />} />
          <Route path="ubicacion" element={<Ubicacion />} />
        </Routes>   

    
      </>
=======
          <Route path="/about" element={<Menu />} />
          <Route path="/contact" element={<Menuinclusivo />} />
          <Route path="/terapia" element={<Ubicacion />} />
        </Routes>
  
    </div>
>>>>>>> origin/featDaiana
  )

}
