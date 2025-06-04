const items = [
  
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDU-31mA9oTOuzKxm0MgJ_NCnmZCXaxgCLw&s",
    title: "CESAR",
    subtitle:"(mix de hojas verdes,queso parmesano,aderezo cesar,pollo a la plancha & crutones)",
     },
     { 
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDU-31mA9oTOuzKxm0MgJ_NCnmZCXaxgCLw&s",
    title: "FREESTYLE",
    subtitle:"(mix de hojas verdes,tomates cheery,cebolla morada,pepino,mix de semillas,aderezo de mostaza & miel)"
    
   
    
    

    }, 
    
]

    
export default function Ensaladas(){


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