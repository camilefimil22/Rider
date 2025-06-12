import FlowingMenu from '../FlowingMenu.tsx'
import Tooltip from '../componentes/Tooltips.jsx';
import Button from '../componentes/Cartel.jsx'

const demoItems = [
  { link: '/', text: 'Inicio', image: 'https://libretadeapuntes.com/libreta/wp-content/uploads/2021/10/Cerveza-dispensador.jpeg' },
  { link: 'Menu', text: 'Menú', image: 'https://okdiario.com/img/2021/05/28/hamburguesa-gourmet-655x368.jpg' },
  { link: 'Bebidas', text: 'Bebidas', image: 'https://www.supercash.es/wp-content/uploads/2022/02/bebidas-refrescantes.jpg' },
  { link: 'Menuinclusivo', text: 'Menú Inclusivo', image: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg' },
  { link: 'Ubicacion', text: 'Ubicación', image: 'https://lh5.googleusercontent.com/p/AF1QipOm-ermO-lOgNoJjk4mdQbbCYqPcbFwHnBZyeVC=w408-h306-k-no' }
];

export default function Inicio(){
 return (
<>
<div className=' h-full'> 

 <div  style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>

   <div className= 'justify-center'>
    <div className='mt-1 ml-160 flex w-20'>
    <Button/>
    </div>

  <div className='flex justify-center'>
    <div className='mt-10 mr-4 flex w-15'>
      <Tooltip />
    </div>
  
</div>
</div>
</div>

</>
    
);
}
