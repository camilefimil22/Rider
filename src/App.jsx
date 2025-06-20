import { useState } from 'react'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Bebidas from './page/Bebidas.jsx';
import Tooltip from './componentes/Tooltips.jsx';
import { Link, Routes ,Route } from 'react-router';
import Ubicacion from './page/ubicacion/Ubicacion.jsx';


export default function App() {
  

  return (
      <>
    
    <nav className='flex h-15 text-white w-full '>
    < ul className ="flex justify-between  w-full">
    <li className='has-focus:bg-red-600 text-center w-1/5 rounded-sm text-white font-bold bg-red-800'><Link to= '/'>Inicio
    </Link></li>
    <li className='has-focus:bg-red-600 w-1/5 rounded-sm text-white font-bold bg-red-800'><Link to= 'Menu'>Menú</Link></li>
    <li className='has-focus:bg-red-600 w-1/5 rounded-sm text-white font-bold bg-red-800'><Link to= 'Bebidas'>Bebidas</Link></li>
    <li className='has-focus:bg-red-600 w-1/5 rounded-sm text-white font-bold bg-red-800'><Link to= 'Menuinclusivo'>Menú Inclusivo</Link></li>
    <li className='has-focus:bg-red-600 w-1/5 rounded-sm text-white font-bold bg-red-800'><Link to= 'Ubicacion'>Ubicación</Link></li>
    </ul>

   </nav>


     
   <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Bebidas" element={<Bebidas />} />
          <Route path="menuinclusivo" element={<Menuinclusivo />} />
          <Route path="ubicacion" element={<Ubicacion />} />
        </Routes>   

    
      </>
  )

}
