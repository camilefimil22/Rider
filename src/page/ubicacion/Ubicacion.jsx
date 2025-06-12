import BlurText from "./BlurText.jsx";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FcAutomotive } from "react-icons/fc";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Ubicacion(){
    
    return(
      //imagen rider
      //imagen de fondo

     <div className="grid row-span-3 h-full w-320  bg-[url(https://i.pinimg.com/736x/a0/b2/55/a0b255d287fdd333340755892a1ba626.jpg)] ">
        <div className=" justify-center border-white border-3 rounded-full bg-center h-50 w-50 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cTXQZf4gaMmkCCM9AJX5Lo8dTxpsYu-v5A&s)]"> </div>
        <div className="flex justify-center text-6xl text-brown underline decoration-double font-mono">
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
          <div className="flex mt-40 ml-20 underline decoration-double">
        <p className="text-4xl ">CONTACTANOS</p>
        <ImLocation className="text-4xl"/>

        </div>
         <div className=" mt-15 ml-20 hover:text-blue-500 transition-transform duration-300 hover:scale-110 ">
        <a className="flex" href="https://www.facebook.com/rider.brewingbar/photos/a.500740104063616/770925757045048/?type=3" target="_blank" rel="noopener noreferrer">
       <BsFacebook className="text-2xl bg-center text-blue-500 "/>
       
        <p className="text-3xl font-mono  ">Rider Brewing Bar</p>
         </a>
        </div>
        <div className=" mt-15 ml-20 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
          <a className="flex" href="https://www.instagram.com/rider_bar/?hl=es" target="_blank" rel="noopener noreferrer">
         
          <FaInstagram   className="text-2xl bg-center bg-pink-400 text-white"/>
      

      <a href="https://www.instagram.com/rider_bar/?hl=es" target="_blank" rel="noopener noreferrer"></a>
        <p className="text-3xl font-mono  ">ʀɪᴅᴇʀ ʙᴀʀ (@rider_bar)</p>
        </a>
        
        </div>
   
        <div className=" mt-15 ml-20 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
          <a className="flex" href="https://www.google.com/search?sca_esv=3689d8f87b454a04&q=rider.brewingbar@gmail.com&nfpr=1&sa=X&ved=2ahUKEwiP5uD2yuqNAxV2rJUCHdNuN3QQvgUoAXoECBUQAg&biw=1272&bih=650&dpr=1" target="_blank" rel="noopener noreferrer">
        <MdOutlineEmail className="text-2xl bg-center  bg-orange-300"/>
        
          <p className="text-3xl font-mono ">rider.brewingbar@gmail.com</p>
          </a>
        </div>
       
      <div className="flex mt-15 ml-20 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
          
        <BsWhatsapp className="text-2xl bg-center text-white bg-green-500"/>
          
          <p className="text-3xl font-mono ">WhatsApp(2945) 546956</p>
        
        </div>

      <div className="flex mt-15 ml-20 hover:text-gray-500 transition-transform duration-300 hover:scale-110">
          
        <FcAutomotive  className="text-2xl "/>
         
          <p className="text-3xl font-mono ">25 de Mayo 478, U9200 Esquel, Chubut</p>
        
        </div>

      </div>

      <div className="ml-10 flex-col">
      <div className="mt-35 grid grid-cols-4 grid-rows-4 gap-1 w-150 h-70">
          <div className=" border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover col-span-2 row-span-4 bg-center  bg-[url(https://lh3.googleusercontent.com/p/AF1QipPInBNFAPQ5oNY6hBecAzoh0zbFV1rEBRI0nPug=s680-w680-h510-rw)]"></div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover col-span-2 row-span-2 col-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/p/AF1QipOm-ermO-lOgNoJjk4mdQbbCYqPcbFwHnBZyeVC=s680-w680-h510-rw)]"></div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover row-span-2 col-start-3 row-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/p/AF1QipN3Ncfn9SJsb8OFpIOlKHn8doF-w6fCFxUL3t0V=s680-w680-h510-rw)]"></div>
          <div className="border-black border-2 border-2 transition-transform duration-300 hover:scale-110 bg-cover row-span-2 col-start-4 row-start-3 bg-center bg-[url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCHW95RtgFRnvOp8_3tfqYTS0oz1Eh-9gk7kOrBBATYc5zickF9il-FbDA5vzllNaPuEgoo3dLEd1uZGsU6Gkm078-LhKaKb4Zl1Y4oNI5-XBSRXAAaBMhsZ41Hfi6u_g9I0a3=s680-w680-h510-rw)]"></div>
      </div>
    
  <iframe className="transition-transform duration-300 hover:scale-110 mt-5 flex h-80 w-150 border-black border-2 border-2 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.989596070928!2d-71.3193484!3d-42.9152604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dada2aacea5e1%3A0x197fcdcecf93b00e!2sRider%20Brewing%20Bar!5e0!3m2!1ses-419!2sar!4v1749511147735!5m2!1ses-419!2sar"></iframe>
     
      </div>
      
  
      
       
        </div>
       
      
      </div>

      
       
    )
}