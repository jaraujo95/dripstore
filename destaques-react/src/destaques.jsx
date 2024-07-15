import React from 'react';

const Destaques = () => {
  return (
    <div>
      <section className="px-8 py-12">
        <div className="text-3xl font-bold mb-8">DESTAQUES</div>
        <div className="flex justify-evenly">
          <div className="destaques-conteiner-1 flex flex-col items-start justify-start w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl mb-2">Novo drop Supreme</h3>
            <button type="button" className="btn bg-slate-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 hover:bg-pink-600 text-white">Comprar</button>
            <div className="produto">
              <img src="/images/star-wars-camisa.png" alt="Imagem do produto" className="w-32 h-auto" />
            </div>
          </div>
          <div className="destaques-conteiner-2 flex flex-col items-start justify-center w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl mb-2">Coleção Adidas</h3>
            <button type="button" className="btn bg-gray-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4">Comprar</button>
            <div className="produto">
              <img src="/images/ddd.png" alt="Imagem do produto" className="w-32 h-auto" />
            </div>
          </div>
          <div className="destaques-conteiner-3 flex flex-col items-start justify-center w-72 h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl mb-2">Novo Beats Bass</h3>
            <button type="button" className="btn bg-gray-300 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4">Comprar</button>
            <div className="produto">
              <img src="/images/fone.png" alt="Imagem do produto" className="w-32 h-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destaques;
