const items = [
  
     {
    image: "https://www.shutterstock.com/image-vector/fried-pork-schnitzel-french-fries-260nw-2561244035.jpg",
    title: "MILANESA DE TERNERA",
    subtitle:"(Con papas fritas)",
     },
     { 
    
    image: "https://globalsymbols.com/uploads/production/image/imagefile/14142/17_14143_65d2b5fd-2974-4b32-91ae-e6035c013890.png",
    title: "HAMBURGUESA",
    subtitle:"(medallon de carne con queso & papas fritas)"
    
   
    
    

    }, 
    
]

    
export default function Menukids(){


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