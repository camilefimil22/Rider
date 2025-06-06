import { useState } from 'react'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Ubicacion from './page/ubicacion/Ubicacion.jsx';
import FlowingMenu from './FlowingMenu.tsx'
import { Routes,Route, Link} from 'react-router';
import Detalle from './page/detalle.jsx';




const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];





export default function App() {
  return (
    
    <>
    <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
    <nav>
    <ul style={{display: 'flex', gap: '60px' }}>
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
  
    </>
  )
}
