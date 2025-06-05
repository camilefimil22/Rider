
const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4INbmttnRGxz9IuQmk0NID5h0IaHPok01dA&s",
    title: "Tortilla de papas",
    subtitle:"(con dip de la casa)",
    }, {
    image: "https://www.shutterstock.com/image-vector/chicken-nuggets-icon-fast-food-600nw-2148206653.jpg",
    title: "fingers de pollo",
    subtitle:"(con salsa de la casa)",
    }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MxlU7wmVQ_0jSpLvz46y9UpWLjXaeTRSMQ&s",
    title: "hummus de remolacha",
    subtitle:"(con bastones de zanahoria y apio)",
    }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJUuBik4CHXlvvgXhuYQ4LGYxy-EMuSfwa5knRRAUqAd5RwSqKhYW00XtmjDK_jYaIFY&usqp=CAU",
    title: "Focaccia de romero y parmesano",
    subtitle:"(con tomates confitados & pesto de albahaca)",
    }, 
    ]

    
export default function Tapas(){


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