

export default function Lista({props}){
    return(
         props.map(item =>
            <div className= 'bg-white shadow-md rounded-md ml-65 p-4 flex justify-between items-center mb-4 max-w-3xl'>
                <div className= 'flex-1 pr-4'>
                    <h3 className= 'text-xl font-extrabold text-left text-gray-800 uppercase'>{item.producto} </h3>
                    <p className='text-sm text-gray-700 mt-1 text-left'>{item.descripcion}</p>
                    <p className= 'text-base font-semibold text-left text-gray-900 mt-2'>{item.precio}</p>
                    
                 </div>
                 <img src={item.imagen} class= 'w-24 h-24 object-right rounded-lg '></img>
            </div>
        )
    )

}