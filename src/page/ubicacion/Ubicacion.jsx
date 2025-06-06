import BlurText from "./BlurText.jsx";
import { ImLocation } from "react-icons/im";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Ubicacion(){
    
    return(
      //imagen rider
      //imagen de fondo

     <div className="h-1000 w-320  bg-[url(https://i.pinimg.com/736x/a0/b2/55/a0b255d287fdd333340755892a1ba626.jpg)] ">
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
        <p className="text-4xl mt-40 ml-20"><ImLocation /> CONTACTANOS</p>
   

      </div>

      
       
    )
}