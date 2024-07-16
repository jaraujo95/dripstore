import React from "react"
import Camisa from './assets/camisa.png'

const Conteiner1 = () => {
    return (
        <div className="flex justify-evenly">
          <div className="destaques-conteiner-1 flex flex-col items-start justify-start w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl mb-2">Novo drop Supreme</h3>
            <button type="button" className="btn bg-slate-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <Camisa className="w-32 h-auto"/>
            </div>
          </div>
        </div>
    )
}

export default Conteiner1