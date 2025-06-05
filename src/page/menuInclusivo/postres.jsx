const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndjNGbdak_ApAqo983D7ZfkjwmY_FtqOxyA&s",
    title: "Flan casero",
    subtitle:"(acompañado de dulce de leche o crema)",
    }, 
    {
    image: "https://cdn-icons-png.flaticon.com/512/1257/1257078.png",
    title: "Copa helada",
    subtitle:"(hasta 3 sabores, (vainilla,americana,chocolate,frutilla,frutos del bosque))",
    },
     {
    image: "https://www.pictotraductor.com/img/pictogramas/SELES1409904275477.png",
    title: "CHOCOTORTA",
   
    },
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpArK9mAgjq7L4iGPuGJ7u5FAzvMpr7wT6w&s",
    title: "TIRAMISU",
    
     },
     
    
   
    
    

    
    
]

    
export default function Postres(){


    return(
        <>
                    {items.map((c,i) => (
                            <article>
                            <div >
                                <img src={c.image} alt={c.title} loading="lazy" />
                            </div>
                            <footer className="chroma-info">
                                <h3 className="name">{c.title}</h3>
                                <h3 className="name">{c.subtitle}</h3>
                            </footer>
                            </article>
                    
                        ))}
                        </>

       
        
    )
}