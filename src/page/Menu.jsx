import { menu } from "../data.js";
import { burgers } from "../data.js";
import { bebida } from "../data.js";
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

        <div className= 'absolute bottom-158 left-65 bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 rounded-md shadow-md w-26 '>
            <p>PIZZAS</p>
        </div>

        <Lista
            props={menu}
        
        />
        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 ml-68 rounded-md shadow-md w-26 '>
            <p>BURGERS</p>
        </div>
        <Lista className=''
            props={burgers}
        />

        <div className= 'bg-red-900 border-black text-white text-xl font-bold py-2 px-4 max-w-xl mx-auto mt-6 rounded-md shadow-md w-26 '>
            <p>bebida</p>
        </div>
        <Lista className=''
            props={bebida}
        />

    </>
);
}

