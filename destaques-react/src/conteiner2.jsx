import React from "react"

const Conteiner2 = () => {
    return (
        <div class="destaques-conteiner-2 flex flex-col items-start justify-center w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div class="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 class="text-2xl mb-2">Coleção Adidas</h3>
            <button type="button" class="btn bg-slate-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div class="produto">
              <Tenis class="w-32 h-auto"/>
            </div>
          </div>
    )
}

export default Conteiner2