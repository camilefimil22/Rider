import {cartas as carta} from '../data.js'
import { useState } from 'react';
import {cerveza} from '../data.js'
import {BlurText} from './ubicacion/BlurText.jsx'


const items = [
  {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Pizzas",
    url: carta.pizzas,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4INbmttnRGxz9IuQmk0NID5h0IaHPok01dA&s",
    title: "Tapas/Tortillas",
   url:  carta.tapas,

  },
 {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGsICjfoik1McSzKZYj4vFUHYLFuAIBWDlQ&sg=8",
      title: "Papas Fritas",
      url: carta.papas,
    },
     {
      image: "https://globalsymbols.com/uploads/production/image/imagefile/16314/17_16315_badd91ce-4108-4e92-87c2-1a3fa9303377.png",
      title: "Empanadas",
      url: carta.empanadas,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C6UhuqG5Md2SkY-BAvmFKLwNHU_bfWjMtQ&s",
      title: "Hamburguesas",
      url: carta.hamburguesas,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
      title: "Sandwiches",
      url: carta.sandwiches,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDU-31mA9oTOuzKxm0MgJ_NCnmZCXaxgCLw&s",
      title: "Ensaladas",
      url: carta.ensaladas,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2uX-tAcIfk7kbcO44lbbKkBwTe6PYiZE6g&s",
      title: "Menu Kids",
      url: carta.menukids,
    },
     {
      image: "https://static.vecteezy.com/system/resources/previews/016/248/847/non_2x/desserts-macaron-cake-and-ice-cream-dessert-icon-element-illustration-colored-outline-vector.jpg",
      title: "Postres",
      url: carta.postres,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiakE8DgQw5cF_xIPFUk9WnyKUFLuwX7s5Q&s",
      title: "Tragos",
      url: carta.tragos,
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaSSyEg3mXu1gfQDj3G4T1zqYLJKSh_y_Iw&s",
      title: "SIN ALCOHOL",
      url:carta.sinalcohol,
    },
    
];

function Item({ name }) {
   const item = cerveza.map((c,i) => (
            <h1 key={i} className='bg-orange-200 text-4xl   text-center '>{c.title}</h1>
      ))
  if (name == carta.tragos) {
     return (<div>
        {item}
     </div>
     )
  }
}

export default function Menuinclusivo(){
    const [state, setState] = useState(items)
    

    return(
      <>
      
      <div className='flex aling-center justify-center text-center underline decoration-double text-6xl font-mono'>
       <div>
        <div className="flex justify-center text-white text-6xl text-brown underline decoration-double font-mono">
                    <BlurText
                      text="MENU INCLUSIVO"
                      delay={150}
                      animateBy="words"
                      direction="top"
                    
                      />
                </div>
          
       </div>
       
          
      </div>
          
   
          <div className=" grid row-span-3 h-56 grid-cols-2 place-items-stretch gap-4">
            {state.map((c,i) => (
                <div key={i} onClick={() =>  c.url ? setState(c.url) : setState(items) } className=" justify-items-center">
                  <img className="h-50 w-50" src={c.image} alt={c.title} loading="lazy" />
                  <h1 className='bg-orange-200 text-4xl px-50'>{c.title}</h1>
                  <h1 className='bg-orange-200 text-2xl px-50'>{c?.subtitle}</h1>
                </div>
            ))}
          <Item 
                name={state} 
              />
          </div>
      </>
 

    )

};

