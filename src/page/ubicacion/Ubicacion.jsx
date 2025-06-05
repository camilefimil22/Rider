import BlurText from "./BlurText.jsx";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Ubicacion(){
    
    return(
        <BlurText
        text="VISITA NUESTRO BAR"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl self-auto mb-50"
        />
       
    )
}