interface productos{
  id:number,
  name:string,
  description:string,
  price:number,
  category_id:number,
  image:string
}

export default function Lista({titulo , item}){
    return(
        
                    <div className="">
              
                        <div className= 'w-90 md:w-300 m-1 bg-white shadow-md rounded-md p-4 flex justify-between items-center mb-4 max-w-3xl'>
                            <div className= 'flex-1 pr-4'>
                                <h3 className= 'text-xl font-extrabold text-left text-gray-800 uppercase'>{item.name} </h3>
                                <p className='text-sm text-gray-700 mt-1 text-left'>{item.description}</p>
                                <p className= 'text-base font-semibold text-left text-gray-900 mt-2'>${item.price}</p>
                                
                            </div>
                            <img src={item.image} className= 'w-24 h-24 object-right rounded-lg '></img>
                        </div>
                    
                    </div>
        
    )

}