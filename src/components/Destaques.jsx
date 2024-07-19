import '../pages/Home.jsx'
import Camisa from '../assets/camisa.svg'
import Tenis from '../assets/tenis.svg'
import Fone from '../assets/fone.svg'
import React from 'react'
import { createElement } from 'react'

function Destaques() {
    return createElement(
        <div className="flex justify-evenly">
          <div className="destaques-conteiner flex flex-col items-start justify-start w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Novo drop Supreme</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <Camisa />
            </div>
          </div>
          <div className="destaques-conteiner flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Coleção Adidas</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <Tenis />
            </div>
          </div>
          <div className="destaques-conteiner flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Novo Beats Bass</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <Fone />
            </div>
          </div>
        </div>
    );
}

export default Destaques