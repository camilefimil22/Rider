const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6mgioj1thSt13XB5fGu2DQPcLLinWdXwtQ&s",
    title: "las clasicas",
    subtitle:"(papas fritas con dip de mayonesa & ketchup)",
    }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6mgioj1thSt13XB5fGu2DQPcLLinWdXwtQ&s",
    title: "papas rider",
    subtitle:"(papas con cheddar,panceta & verdeo)",
    }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6mgioj1thSt13XB5fGu2DQPcLLinWdXwtQ&s",
    title: "papas bravas",
    subtitle:"(papas rotas con salsa picante rider)",
    }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6mgioj1thSt13XB5fGu2DQPcLLinWdXwtQ&s",
    title: "a la provenzal",
    subtitle:"(papas fritas con provenzal)",
    }, ]

    
export default function Papas(){


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