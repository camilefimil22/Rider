import ChromaGrid from './ChromaGrid'

const items = [
  {
    image: "https://globalsymbols.com/uploads/production/image/imagefile/15587/17_15588_c48d7973-e916-4419-969b-e38c1483aa06.png",
    title: "Pizzas",
    
    borderColor: "#3B82F6",
   
    url:'/contact/Pizza'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4INbmttnRGxz9IuQmk0NID5h0IaHPok01dA&s",
    title: "Tapas/Tortillas",
    
    borderColor: "#10B981",
    
    url: "https://linkedin.com/in/mikechen"

  },
 {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGsICjfoik1McSzKZYj4vFUHYLFuAIBWDlQ&sg=8",
      title: "Papas Fritas",
      
      borderColor: "#4F46E5",
  
      url: "https://github.com/",
    },
     {
      image: "https://globalsymbols.com/uploads/production/image/imagefile/16314/17_16315_badd91ce-4108-4e92-87c2-1a3fa9303377.png",
      title: "Empanadas",
      
      borderColor: "#4F46E5",
     
      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C6UhuqG5Md2SkY-BAvmFKLwNHU_bfWjMtQ&s",
      title: "Hamburguesas",
      
      borderColor: "#4F46E5",
      
      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWPbQGbQAMLZcGqcH86JzXc8lmasTLd5qqbmhK7KGh0hmhiC7NwUQBZngU8FjKwjUeYo&usqp=CAU",
      title: "Sandwiches",
      
      borderColor: "#4F46E5",
     
      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDU-31mA9oTOuzKxm0MgJ_NCnmZCXaxgCLw&s",
      title: "Ensaladas",
     
      borderColor: "#4F46E5",
      
      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2uX-tAcIfk7kbcO44lbbKkBwTe6PYiZE6g&s",
      title: "Menu Kids",
     
      borderColor: "#4F46E5",
   
      url: "https://github.com/",
    },
     {
      image: "https://static.vecteezy.com/system/resources/previews/016/248/847/non_2x/desserts-macaron-cake-and-ice-cream-dessert-icon-element-illustration-colored-outline-vector.jpg",
      title: "Postres",
      
      borderColor: "#4F46E5",
    
      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiakE8DgQw5cF_xIPFUk9WnyKUFLuwX7s5Q&s",
      title: "Tragos",
      
      borderColor: "#4F46E5",

      url: "https://github.com/",
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaSSyEg3mXu1gfQDj3G4T1zqYLJKSh_y_Iw&s",
      title: "SIN ALCOHOL",
      
      borderColor: "#4F46E5",
     
      url: "https://github.com/",
    },
    
];


export default function Menuinclusivo(){
    return(
    <div style={{ height: '600px', position: 'relative' }}>
    <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
    />
    </div>

    )

};

