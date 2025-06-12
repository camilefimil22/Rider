import React from 'react';
import { bebida } from "../data.js";
import Lista from "../componentes/Tarjeta.jsx";
import Tooltip from "../componentes/Tooltips.jsx";
import Form from '../componentes/Form.jsx'


export default function Bebidas(){
    const lista =[{titulo:"TRAGOS",item:bebida.tragos},{titulo:"GIN",item:bebida.gin},
        {titulo:"SIN ALCOHOL",item:bebida.sinalcohol},{titulo:"CERVEZAS",item:bebida.cervezas}];
 
  
 return (
    <div className=' relative'>
        <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">   
            <img
                className="object-cover object-center rounded-lg h-10 w-70"
                src="./src/assets/BEBIDAS.jpg"
            />
        </div>
        
        {lista.map((item)=>
            <>
            <Lista
                titulo={item.titulo}
                props={item.item}
            />
    </>)}
    
    <Form/>
    <div className="absolute top-30 left-2 h-200 gap-30">
        <Tooltip />
    </div>
    
    
    <div/>
    </div>
 );
}