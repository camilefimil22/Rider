import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './page/Inicio.jsx';
import Menu from './page/Menu.jsx';
import Menuinclusivo from './page/Menuinclusivo.jsx';
import Ubicacion from './page/Ubicacion.jsx';


function App() {
  return (
    <>
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




      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
