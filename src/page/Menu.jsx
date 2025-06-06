import { menu } from "../data.js";
import { burgers } from "../data.js";
import { papas } from "../data.js";
import {empanadas} from "../data.js";
import {sandwiches} from "../data.js";
import {tapas} from "../data.js";
import {ensaladas} from "../data.js";
import {kids} from "../data.js";
import {postres} from "../data.js";
import Lista from "../componentes/Tarjeta.jsx";


export default function Menu(){


 return (
    <>
        <div className="grid min-h-[120px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
                className="object-cover object-center rounded-lg h-10 w-70"
                src="./src/assets/cartel.jpg"
            />
        </div>

        <div className= 'absolute bottom-154 left-65 bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 rounded-md shadow-md w-26 '>
            <p>PIZZAS</p>
        </div>

        <Lista
            props={menu}
        
        />
        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 ml-65 rounded-md shadow-md w-28 '>
            <p>BURGERS</p>
        </div>
        <Lista className=''
            props={burgers}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-28 '>
            <p>PAPAS FRITAS</p>
        </div>
        <Lista className=''
            props={papas}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-38 '>
            <p>EMPANADAS</p>
        </div>
        <Lista className=''
            props={empanadas}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-40 '>
            <p>SANDWICHES</p>
        </div>
        <Lista className=''
            props={sandwiches}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-40 '>
            <p>TAPAS</p>
        </div>
        <Lista className=''
            props={tapas}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-40 '>
            <p>ENSALADAS</p>
        </div>
        <Lista className=''
            props={ensaladas}
        />
        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-40 '>
            <p>MENU KIDS</p>
        </div>
        <Lista className=''
            props={kids}
        />
        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 ml-65 px-4 max-w-xl mx-auto mt-5 rounded-md shadow-md w-40 '>
            <p>POSTRES</p>
        </div>
        <Lista className=''
            props={postres}
        />



    </>
);
}

