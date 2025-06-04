import './pizza.css'

const items = [
  {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Mozzarella",
    subtitle:"(queso mozzarella & salsa de tomate)",
    }, {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Napolitana",
    subtitle:"(queso mozzarella,tomates frescos,salsa de tomate & pesto de albahaca)",
    }, {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Margarita",
    subtitle:"(queso mozzarella, salsa de tomate & albahaca",
    }, {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Fugazzeta",
    subtitle:"(queso mozzarella,salsa de tomate & cebolla)",
    }, {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Especial",
    subtitle:"(queso mozzarella,salsa de tomate, jamon & morron )",
    }, {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Bacon",
    subtitle:"(queso mozzarella,salsa de tomate,panceta & huevo frito)",
    
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Serrano",
    subtitle:"(queso mozzarella,salsa de tomate,rucula,jamon crudo & parmesano )",
    },]

    
export default function Pizza(){


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