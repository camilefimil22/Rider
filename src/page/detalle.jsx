import {carta} from '../data.js'

export default function Detalle(){
    return(
        <>
        <div className="flex justify-center">
        {Carta.empanadas.map((c,i) => (
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
        </div>
       
        </>
        
    )
}
                /*    {CERVEZAS.map((c,i) => (
                            <article>
                        
                            <footer className="chroma-info">
                                <h3 className="name">{c.title}</h3>
                            </footer>
                            </article>
                    
                        ))

                    }
                  
*/
       
     