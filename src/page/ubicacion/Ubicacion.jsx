import BlurText from "./BlurText.jsx";
import { ImLocation } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImMail } from "react-icons/im";
import { FaLocationArrow } from "react-icons/fa";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Ubicacion(){
    
    return(
      //imagen rider
      //imagen de fondo

     <div className="grid row-span-3 h-full w-320  bg-[url(https://i.pinimg.com/736x/a0/b2/55/a0b255d287fdd333340755892a1ba626.jpg)] ">
        <div className=" justify-center border-white border-3 rounded-full bg-center h-50 w-50 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cTXQZf4gaMmkCCM9AJX5Lo8dTxpsYu-v5A&s)]"> </div>
        <div className="flex justify-center text-6xl text-brown font-mono">
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
          <div className="flex mt-40 ml-20">
        <p className="text-4xl ">CONTACTANOS</p>
        <ImLocation className="text-4xl"/>

        </div>
         <div className="flex mt-15 ml-20">
       <ImFacebook2 className="text-2xl"/>
        <p className="text-3xl font-mono ">Rider Brewing Bar</p>
         
        </div>
        <div className="flex mt-15 ml-20">
       <ImInstagram  className="text-2xl"/>
        <p className="text-3xl font-mono ">ʀɪᴅᴇʀ ʙᴀʀ (@rider_bar)</p>
        
        </div>
   
        <div className="flex mt-15 ml-20">
        <ImMail  className="text-2xl"/>
          <p className="text-3xl font-mono ">rider.brewingbar@gmail.com</p>
        
        </div>
        <div className="flex mt-25 ml-20">
        <FaLocationArrow   className="text-2xl"/>
          <p className="text-3xl font-mono ">Como llegar...</p>
        
        </div>
      </div>
      <div className="absolute top-200 mt-20 ml-80 bg-center h-50 w-100 bg-[url(https://lh3.googleusercontent.com/p/AF1QipPInBNFAPQ5oNY6hBecAzoh0zbFV1rEBRI0nPug=s680-w680-h510-rw)]"> </div>
      <div className=" mt-40 ml-20 bg-center h-80 w-80 bg-[url(https://lh3.googleusercontent.com/p/AF1QipOm-ermO-lOgNoJjk4mdQbbCYqPcbFwHnBZyeVC=s680-w680-h510-rw)]"> </div>
      <div className=" mt-40 ml-1 bg-center justify-start h-45 w-45 bg-[url(https://lh3.googleusercontent.com/p/AF1QipN3Ncfn9SJsb8OFpIOlKHn8doF-w6fCFxUL3t0V=s680-w680-h510-rw)]"> </div> 
      <div className=" mt-44 ml-2 bg-center h-60 w-45 bg-[url(https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCHW95RtgFRnvOp8_3tfqYTS0oz1Eh-9gk7kOrBBATYc5zickF9il-FbDA5vzllNaPuEgoo3dLEd1uZGsU6Gkm078-LhKaKb4Zl1Y4oNI5-XBSRXAAaBMhsZ41Hfi6u_g9I0a3=s680-w680-h510-rw)]"> </div>
      
       <iframe className="flex mt-200 ml-2 h-80 w-110 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.989596070928!2d-71.3193484!3d-42.9152604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dada2aacea5e1%3A0x197fcdcecf93b00e!2sRider%20Brewing%20Bar!5e0!3m2!1ses-419!2sar!4v1749511147735!5m2!1ses-419!2sar"></iframe>
        </div>
       
        
      
      </div>

      
       
    )
}