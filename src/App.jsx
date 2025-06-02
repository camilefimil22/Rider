import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Ubicacion from './page/Ubicacion.jsx';
import FlowingMenu from './FlowingMenu.tsx'



const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];



function App() {
  return (
    
    <>
    <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
    <nav>
    <ul style={{display: 'flex', gap: '60px' }}>
    <li><Link to= '/'>Inicio</Link></li>
    <li><Link to= 'Menu'>Menu</Link></li>
    <li><Link to= 'Menu inclusivo'>Menu Inclusivo</Link></li>
    <li><Link to= 'Ubicacion'>Ubicacion</Link></li>

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

export default App
