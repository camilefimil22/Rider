import React, { useState } from 'react';
import { bebida } from "../data.js";
import Lista from "../componentes/Tarjeta.jsx";
import Tooltip from "../componentes/Tooltips.jsx";
import Form from '../componentes/Form.jsx'


export default function Bebidas() {
    const lista =[
    {titulo:"TRAGOS",item:bebida.tragos},
    {titulo:"GIN",item:bebida.gin},
    {titulo:"SIN ALCOHOL",item:bebida.sinalcohol},
    {titulo:"CERVEZAS",item:bebida.cervezas}
    ];
 
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('TRAGOS');
  
  return (
    <>
        <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">   
            <img
                className="object-cover object-center rounded-lg h-10 w-70"
                src="https://filemon.grupobuenrollo.com/files/images/botones/BotonFilemon2.png"
            />
        </div>
        
      
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              {lista.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCategoriaSeleccionada(item.titulo)}
                  className={`px-4 py-2 rounded-full text-white font-bold ${
                    categoriaSeleccionada === item.titulo ? 'bg-red-800' : 'bg-gray-400'
                  }`}
                >
                  {item.titulo}
                </button>
              ))}
            </div>
      
            {lista
              .filter((item) => item.titulo === categoriaSeleccionada)
              .map((item, index) => (
                <Lista key={index} titulo={item.titulo} props={item.item} />
              ))}
      
            <Form />
            <div className="flex justify-center">
              <div className="mt-4 mr-4 flex w-15">
                <Tooltip />
              </div>
            </div>
        </>
        );
      }
