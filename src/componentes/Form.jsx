import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 mt-500">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">RESERVA TU MESA</h2>
        <form className="flex flex-col">
          <input placeholder="Nombre" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
          <input placeholder="Número de teléfono" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
          <select className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="Horarios disponibles">
            <option value="product-1">19:30hs</option>
            <option value="product-2">21:00hs</option>
            <option value="product-3">22.00hs</option>
          </select>
          <input placeholder="Cantidad de personas" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />
          <textarea placeholder="Preferencias" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback" defaultValue={""} />
          <button className="bg-gradient-to-r from-black-200 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition ease-in-out duration-150" type="submit">RESERVAR</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
