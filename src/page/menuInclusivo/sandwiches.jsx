
const items = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
    title: "sanduinesa",
    subtitle:"(milanesa,jamon,queso,lechuga & tomate)",
    }, 
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
    title: "la hoya",
    subtitle:"(pollo a la plancha,alioli,queso,lechuga & tomate)",
    },
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
    title: "andorra",
    subtitle:"(milanesa de berenjena,alioli,queso,rucula & tomates confitados)",
    },
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
    title: "vegan style",
    subtitle:"(berenjena grillada,zuchinni grillado,rucula,cebolla caramelizada & tomates confitados)",
     },
     { 
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljnKbQAaAlwHxwUvHCEpKQgPgbfKWmxGb6g&s",
    title: "extra huevo frito",
    
   
    
    

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