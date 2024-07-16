import React from "react"
import Fone from "./assets/fone.png"

const Conteiner3 = () => {
    return (
        <div class="destaques-conteiner-3 flex flex-col items-start justify-center w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div class="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 class="text-2xl mb-2">Novo Beats Bass</h3>
            <button type="button" class="btn bg-slate-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div class="produto">
              <Fone class="w-32 h-auto"/>
            </div>
          </div>
    )
}

export default Conteiner3