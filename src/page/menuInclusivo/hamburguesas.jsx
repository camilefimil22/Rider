const items = [
  {
    image: "https://st.depositphotos.com/1734074/5127/v/450/depositphotos_51276485-stock-illustration-vector-sandwich-flat-icon.jpg",
    title: "tradi",
    subtitle:"(queso,jamon,lechuga,tomate & alioli)",
    }, 
    {
    image: "https://st.depositphotos.com/1734074/5127/v/450/depositphotos_51276485-stock-illustration-vector-sandwich-flat-icon.jpg",
    title: "american style",
    subtitle:"( cheddar,pepinillos & ketchup)",
    },
     {
    image: "https://st.depositphotos.com/1734074/5127/v/450/depositphotos_51276485-stock-illustration-vector-sandwich-flat-icon.jpg",
    title: "patagonica",
    subtitle:"(queso azul,cebolla caramelizada,hongos,rucula & alioli)",
    },
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwEE3xurC3sHaSorEWFmZGnaPoZw-VMpMTw&s",
    title: "crispy",
    subtitle:"(pollo crispy,alioli,lechuga & coleslaw)",
     },
     { 
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FJGQPev9g5hQrbjDEsW6yp_7MdwT3-Ym1A&s",
    title: "veggie",
    subtitle:"(mix verdes,tomate,queso,cebolla caramelizada & alioli)",
    
    

    }, 
    
]

    
export default function Hamburguesas(){


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