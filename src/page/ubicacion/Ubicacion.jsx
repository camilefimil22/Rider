import BlurText from "./BlurText.jsx";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FcAutomotive } from "react-icons/fc";
import gin from "../../assets/ridergin.png"
import ridernoche from "../../assets/ridernoche.png"

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Ubicacion(){
    
    return(
      //imagen rider
      //imagen de fondo

     <div className="grid row-span-3 w-350 h-320  bg-[url(https://i.pinimg.com/736x/a0/b2/55/a0b255d287fdd333340755892a1ba626.jpg)] ">
        <div className=" justify-center border-white border-3 rounded-full bg-center h-50 w-50 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cTXQZf4gaMmkCCM9AJX5Lo8dTxpsYu-v5A&s)]"> </div>
        <div className="px-20 bg-red-900 backdrop-blur-sm p-4 rounded flex justify-center text-6xl text-white underline decoration-double font-serif">
            <BlurText
              text="VISITA NUESTRO BAR "
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              
              />
        </div>
        
        <div className="flex">
           <div>
          <div className="flex mt-40 ml-20 underline decoration-double text-white">
       
        <ImLocation className="text-7xl bg-red-900 backdrop-blur-sm rounded "/>

        <p className="bg-red-900 backdrop-blur-sm p-4 rounded text-white text-4xl font-serif">CONTACTANOS</p>
        </div>

         <div className="bg-red-900 backdrop-blur-sm p-4 rounded mt-15 ml-20 hover:text-white transition-transform duration-300 hover:scale-110 ">
        <a className="flex" href="https://www.facebook.com/rider.brewingbar/photos/a.500740104063616/770925757045048/?type=3" target="_blank" rel="noopener noreferrer">
       <BsFacebook className="text-4xl bg-center text-blue-500 "/>
       
        <p className="text-3xl font-serif ">Rider Brewing Bar</p>
         </a>
        </div>
        <div className="bg-red-900 backdrop-blur-sm p-4 rounded mt-15 ml-20 hover:text-white transition-transform duration-300 hover:scale-110">
          <a className="flex" href="https://www.instagram.com/rider_bar/?hl=es" target="_blank" rel="noopener noreferrer">
         
          <FaInstagram   className="text-4xl bg-center bg-pink-400 text-white"/>
      

      <a href="https://www.instagram.com/rider_bar/?hl=es" target="_blank" rel="noopener noreferrer"></a>
        <p className="text-3xl font-serif  ">ʀɪᴅᴇʀ ʙᴀʀ (@rider_bar)</p>
        </a>
        
        </div>
   
        <div className="bg-red-900 backdrop-blur-sm p-4 rounded mt-15 ml-20 hover:text-white transition-transform duration-300 hover:scale-110">
          <a className="flex" href="https://www.google.com/search?sca_esv=3689d8f87b454a04&biw=1272&bih=650&q=rider.brewing+bar@gmail.com&spell=1&sa=X&ved=2ahUKEwi9v5a21O-NAxUbG7kGHQ4xCJ4QBSgAegQIIBAB" target="_blank" rel="noopener noreferrer">
        <MdOutlineEmail className="text-4xl bg-center  bg-orange-300"/>
        
          <p className="text-3xl font-serif ">rider.brewingbar@gmail.com</p>
          </a>
        </div>
       
      <div className="bg-red-900 backdrop-blur-sm p-4 rounded flex mt-15 ml-20 hover:text-white transition-transform duration-300 hover:scale-110">
          
        <BsWhatsapp className="text-4xl bg-center text-white bg-green-500"/>
          <a className="flex" href="https://api.whatsapp.com/send?phone=542945546956&text=Hola%2C%20quiero%20hacer%20un%20pedido." target="_blank" rel="noopener noreferrer">
       
          <p className="text-3xl font-serif ">WhatsApp(2945) 546956</p>
        </a>
        </div>

      <div className="bg-red-900 backdrop-blur-sm p-4 rounded flex mt-15 ml-20 hover:text-white transition-transform duration-300 hover:scale-110">
          
        <FcAutomotive  className="text-4xl "/>
         
          <p className="text-3xl font-serif ">25 de Mayo 478, U9200 Esquel, Chubut</p>
        
        </div>

      </div>

      <div className="ml-10  flex-col">
      <div className="mt-35 grid grid-cols-4 grid-rows-4 gap-1 w-150 h-70">
          <div className=" border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover col-span-2 row-span-4 bg-center">
             <img className="h-full w-full" src={ridernoche} />
          </div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover col-span-2 row-span-2 col-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/p/AF1QipOIAICrMaRfwwAkeV-I8xj46-U6ZncsopZly698=s680-w680-h510-rw)]"></div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover row-span-2 col-start-3 row-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/p/AF1QipN3Ncfn9SJsb8OFpIOlKHn8doF-w6fCFxUL3t0V=w145-h156-n-k-no)]"></div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover row-span-2 col-start-4 row-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCHW95RtgFRnvOp8_3tfqYTS0oz1Eh-9gk7kOrBBATYc5zickF9il-FbDA5vzllNaPuEgoo3dLEd1uZGsU6Gkm078-LhKaKb4Zl1Y4oNI5-XBSRXAAaBMhsZ41Hfi6u_g9I0a3=s680-w680-h510-rw)]">
           <img className="h-full w-full" src={gin} />
          </div>
      </div>
    
  <iframe className="transition-transform duration-300 hover:scale-110 mt-5 flex h-80 w-140 border-black border-2 border-2 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.989596070928!2d-71.3193484!3d-42.9152604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dada2aacea5e1%3A0x197fcdcecf93b00e!2sRider%20Brewing%20Bar!5e0!3m2!1ses-419!2sar!4v1749511147735!5m2!1ses-419!2sar"></iframe>
     
      </div>
      
  
      
       
        </div>
       
      
      </div>

      
       
    )
}