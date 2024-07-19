import '../pages/Home.jsx'
import Camisa from '../assets/camisa.svg'
import Tenis from '../assets/tenis.svg'
import Fone from '../assets/fone.svg'
import React from 'react'

function Destaques() {
    return(
        <div className="flex justify-evenly">
          <div className="relative flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="z-10 bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="z-10 text-2xl font-bold mb-2">Novo drop Supreme</h3>
            <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
              <img src={Camisa} className='absolute right-0 bottom-0'/>
          </div>
          <div className="relative flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="z-10 bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="z-10 text-2xl font-bold mb-2">Coleção Adidas</h3>
            <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
              <img src={Tenis} className='absolute right-0 bottom-0'/>
          </div>
          <div className=" relative flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="z-10 bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="z-10 text-2xl font-bold mb-2">Novo Beats Bass</h3>
            <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
              <img src={Fone} className='absolute right-0 bottom-0'/>
          </div>
        </div>
    );
}

export default Destaques