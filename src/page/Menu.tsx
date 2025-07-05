import { useState, useEffect } from 'react';
import { carta } from '../data.js';
import Lista from '../componentes/Tarjeta.tsx';
import Tooltip from '../componentes/Tooltips.jsx';
import Form from '../componentes/Form.jsx'
import  supabase  from '../utils/supabase.ts';

interface productos{
  id:number,
  name:string,
  description:string,
  price:number,
  category_id:number,
  image:string
}

interface categorias {
id: number,
name: string,
image: string
}

export default function Menu() {
  const [productos, setProductos] = useState<productos[]> ([])
  const [categorias, setCategorias] = useState<categorias[]> ([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(1);

   useEffect(() => {
    const getDatos = async () => {
      const { data: productosData, error: errorProd } = await supabase
        .from('productos')
        .select('*')
        .lt('category_id', '10')
          setProductos(productosData);

      const { data: categoriasData, error: errorCat } = await supabase
          .from ('categories')
          .select ('*')
          
        .lt('id', '10');

        setCategorias(categoriasData);
        ;
      
    }
    getDatos();
  },[]);

  return (
    <>
      <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <img
          className="object-cover object-center rounded-lg h-10 w-70"
          src="https://swensonsdriveins.com/wp-content/themes/swensons/images/straw-menu.png"
        />
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {categorias.map((item) => (
          <button
            key={item.id}
            onClick={() => setCategoriaSeleccionada(item.id)}
            className={`px-4 py-2 rounded-full text-white font-bold ${
              categoriaSeleccionada === item.id ? 'bg-red-800' : 'bg-gray-400'
            }`}
          >
            {item.name}
          </button>
          
        ))
        
        }
        
      </div>
            <div className="flex justify-center pr-135" >
            <div className= ' bg-red-900 border-black text-white text-xl font-bold rounded-md shadow-md w-35 h-10'>

              {categorias.filter((item) => item.id === categoriaSeleccionada).map((item) => 
                                <p>{item.name}</p>)
              }
                               {productos
        .filter((item) => item.category_id === categoriaSeleccionada)
        .map((item, index) => (
          <Lista key={index} titulo={item.name} item={item}   />
        ))} 
                    
      
</div>
       
        </div>
      <Form />
      <div className="flex justify-center ">
        <div className="mt-205 mr-4 flex w-15">
          <Tooltip />
        </div>
      </div>
    </>
  );
}
