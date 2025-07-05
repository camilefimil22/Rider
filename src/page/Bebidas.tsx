import React, { useState, useEffect } from 'react';
import Lista from '../componentes/Tarjeta.tsx';
import Tooltip from '../componentes/Tooltips.jsx';
import Form from '../componentes/Form.jsx';
import supabase from '../utils/supabase.ts';

interface productos{
  id:number,
  name:string,
  description:string,
  price:number,
  category_id:number,
  image:string
}

interface categorias {
  id: number;
  name: string;
  image: string;
}

export default function Bebidas() {
  const [productos, setProductos] = useState<productos[]> ([])
  const [categorias, setCategorias] = useState<categorias[]> ([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(10);

    useEffect(() => {
    const getDatos = async () => {
      const { data: productosData, error: errorProd } = await supabase
        .from('productos')
        .select('*')
        .gte('category_id', '10')       

        ;

          setProductos(productosData)

      const { data: categoriasData, error: errorCat } = await supabase
          .from ('categories')
          .select ('*')
          
  .gte('id', '10');


          setCategorias(categoriasData);
      
    }
    getDatos();
  },[]);

  return (
    <>
      <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <img
          className="object-cover object-center rounded-lg h-10 w-70"
          src="https://filemon.grupobuenrollo.com/files/images/botones/BotonFilemon2.png"
        />
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoriaSeleccionada(cat.id)}
            className={`px-4 py-2 rounded-full text-white font-bold ${
              categoriaSeleccionada === cat.id ? 'bg-red-800' : 'bg-gray-400'
            }`}
          >
            {cat.name}
          </button>

        ))}
      </div>

      <div className="flex justify-center flex-wrap gap-4">
        {productos
          .filter(prod => prod.category_id === categoriaSeleccionada)
          .map((item, idx) => (
            <Lista key={idx} titulo={item.name} item={item} />
          ))}
      </div>


      <Form />
      <div className="flex justify-center">
        <div className="mt-4 mr-4 flex w-15">
          <Tooltip />
        </div>
      </div>
    </>
  );
}
 



