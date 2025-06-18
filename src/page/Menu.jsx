import React from 'react';
import { carta } from "../data.js";
import Lista from "../componentes/Tarjeta.jsx";
import Tooltip from "../componentes/Tooltips.jsx";
import Form from '../componentes/Form.jsx'


export default function Menu(){
    const lista =[{titulo:"PIZZA",item:carta.pizza},{titulo:"BURGERS",item:carta.burgers},
        {titulo:"PAPAS",item:carta.papas},{titulo:"EMPANADAS",item:carta.empanadas},
        {titulo:"SANDWICHES",item:carta.sandwiches},{titulo:"TAPAS",item:carta.tapas},
        {titulo:"ENSALADAS",item:carta.ensaladas},{titulo:"KIDS",item:carta.kids},
        {titulo:"POSTRES",item:carta.postres}];
 
   
 return (
    <>
        <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">   
            
            <img
                className="object-cover object-center rounded-lg h-10 w-70"
                src="https://swensonsdriveins.com/wp-content/themes/swensons/images/straw-menu.png"
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
            

             <div className='flex justify-center'>
        <div className='mt-4 mr-4 flex w-15'>
          <Tooltip />
        </div>
                </div>

    </>        

); }