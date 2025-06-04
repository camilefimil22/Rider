const items = [
  {
    image: "https://media.istockphoto.com/id/1363835210/es/vector/vector-empanadas-ilustraci%C3%B3n-aislada-comida-frita.jpg?s=612x612&w=0&k=20&c=aq4eescLdl2x323_V5pKU2L-s-Kr2aO1w9C4Q3Onnlc=",
    title: "jamon & queso",
   
    }, {
    image: "https://media.istockphoto.com/id/1363835210/es/vector/vector-empanadas-ilustraci%C3%B3n-aislada-comida-frita.jpg?s=612x612&w=0&k=20&c=aq4eescLdl2x323_V5pKU2L-s-Kr2aO1w9C4Q3Onnlc=",
    title: "carne cortada a cuchillo",
    
    }, {
    image: "https://media.istockphoto.com/id/1363835210/es/vector/vector-empanadas-ilustraci%C3%B3n-aislada-comida-frita.jpg?s=612x612&w=0&k=20&c=aq4eescLdl2x323_V5pKU2L-s-Kr2aO1w9C4Q3Onnlc=",
    title: "queso y cebolla",
    
    }, 
    
    ]

    
export default function Empanadas(){


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