const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJW1Z7R73zYpKI-0Jq0tkacMXwwk8oRpbW-g&s",
    title: "GASEOSAS",
    subtitle:"(coca-cola, sprite,fanta)",
    }, 
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw-9X43er8Z04TKYF897ErVDmriC9vmTung&s",
    title: "LIMONADA",
    subtitle:"(con menta & jengibre)",
    },
     {
    image: "https://ih1.redbubble.net/image.411272905.6980/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg",
    title: "LIMONADA ROSA",
    subtitle:"(con menta, frutos rojos & jengibre)",
    },
     {
    image: "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-lemonade-clipart-pitcher-with-orange-slices-and-ice-cartoon-vector-png-image_6809669.png",
    title: "JARRA DE LIMONADA",
    subtitle:"(con menta & jengibre)",
     },
     { 
    
    image: "https://us.123rf.com/450wm/vecstock/vecstock2003/vecstock200306909/141685533-jarra-de-agua-y-bebida-de-vidrio-dise%C3%B1o-de-icono-de-estilo-de-medio-color-de-media-l%C3%ADnea-men%C3%BA.jpg?ver=6",
    title: "JARRA DE LIMONADA ROSA",
    subtitle:"(con menta,frutos rojos & jengibre)",

     },
      { 
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Dzg6AMJQ0CSF-k_1kIEQdICSAiu_dZ9oVw&s",
    title: "Agua",
    subtitle:"(agua con & sin gas, agua tonica)",

     },
   
    
    

    
    
]

    
export default function Sandwiches(){


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