import {tragos} from "../data.js";
import {gin} from "../data.js";
import {sinalcohol} from "../data.js";
import {cervezas} from "../data.js";
import Lista from "../componentes/Tarjeta.jsx";


export default function Bebidas(){
 return (
    <>
    
 <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"><img
            className="object-cover object-center rounded-lg h-10 w-70"
            src="./src/assets/BEBIDAS.jpg"/>
            </div>

<div className= 'absolute bottom-154 left-65 bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 rounded-md shadow-md w-26 '>
            <p>TRAGOS</p>
            </div>
            <Lista
                props={tragos}
            />

    <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 ml-65 rounded-md shadow-md w-32 '>
            <p>CERVEZAS</p>
            </div>
            <Lista
                props={cervezas}
            />



<div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 ml-65 rounded-md shadow-md w-28 '>
            <p>GIN</p>
            </div>
            <Lista
                props={gin}
            />

<div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 ml-65 rounded-md shadow-md w-28 '>
            <p>SIN ALCOHOL</p>
            </div>
            <Lista
                props={sinalcohol}
            />



    </>
);
}