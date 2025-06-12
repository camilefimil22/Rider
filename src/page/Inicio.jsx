import FlowingMenu from '../FlowingMenu.tsx'
import Tooltip from '../componentes/Tooltips.jsx';
import Button from '../componentes/Cartel.jsx'

const demoItems = [
  { link: '/', text: 'Inicio', image: 'https://tse4.mm.bing.net/th/id/OIP.s6KPENkVUykN8gMboHxrDwHaHa?rs=1&pid=ImgDetMain' },
  { link: 'Menu', text: 'Menú', image: 'https://tse1.mm.bing.net/th/id/OIP.4b0hznE1y7OrfC0ghwkjjgHaHa?rs=1&pid=ImgDetMain' },
  { link: 'Bebidas', text: 'Bebidas', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/3c/33/2f/12-canillas-de-cervezas.jpg' },
  { link: 'Menuinclusivo', text: 'Menú Inclusivo', image: 'https://tse1.mm.bing.net/th/id/OIP.td3aUV0e8Wy7lQqnFtB5gwHaHa?rs=1&pid=ImgDetMain' },
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
    <div className='mt-10 mr-6 flex w-15'>
      <Tooltip />
    </div>
  
</div>
</div>
</div>

</>
    
);
}
