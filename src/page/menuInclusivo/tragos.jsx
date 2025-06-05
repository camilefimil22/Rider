
const items = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/4097/4097652.png",
    title: "VERMUT",
    subtitle:"(cinzano,soda,limon o naranja)",
    }, 
    {
    image: "https://cdn-icons-png.flaticon.com/512/4097/4097652.png",
    title: "APEROL SPRITZ",
    subtitle:"(aperol,prosecco & agua con gas)",
    },
     {
    image: "https://st2.depositphotos.com/1810600/11382/v/450/depositphotos_113828238-stock-illustration-coca-cola-color-picture-sticker.jpg",
    title: "FERNET CON COCA",
    
    },
     {
    image: "https://cdn-icons-png.flaticon.com/512/4097/4097652.png",
    title: "CUBA LIBRE",
   
     },
     { 
    
    image: "https://cdn-icons-png.flaticon.com/512/4097/4097652.png",
    title: "CAMPARI",
 },
    {
    image: "https://cdn-icons-png.flaticon.com/512/4097/4097652.png",
    title: "GIN TONIC",
    subtitle:"(Gin de la casa,tonica,limon & pepino)",
    },
     {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUkidxMzVmszfsaFVrXjliGcABtOdx6WnMUh7TdN7xZbvnKJ9z6naLTFiqvshLMrilwg&usqp=CAU",
    title: "GIN TONIC ROSADO",
    subtitle:"(Gin de la casa,tonica,limon & frutos rojos)",
    
    },
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXUcC9GzgWdxOLz4594BAelI4lHwQMZXLvQ&s",
    title: "CERVEZA ARTESANAL",
   
    
    
    },
    
    
    
    
]

    
const CERVEZAS=[{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXUcC9GzgWdxOLz4594BAelI4lHwQMZXLvQ&s",
    title: "AMERICAN IPA GORSEDD",
   
},
{
    
    title: "HONEY IPA GORSEDD",
   
},
{
    
    title: "RED IPA GORSEDD",
   
},{
   
    title: "BROWN IPA",
   
},{
    
    title: "NEW ENGLAND IPA",
   
},{
    
    title: "APA WESLEY",
   
},{
    
    title: "APA BERNA",
   
},
{
    
    title: "APA NELTA",
   
},
{
    
    title: "IPA AWKA",
   
},{
    
    title: "IPA WESLEY",
   
},{
    
    title: "IPA BERNA",
   
},
]

export default function Tragos(){


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
                    {CERVEZAS.map((c,i) => (
                            <article>
                        
                            <footer className="chroma-info">
                                <h3 className="name">{c.title}</h3>
                            </footer>
                            </article>
                    
                        ))

                    }
                    </>

       
        
    )
}
