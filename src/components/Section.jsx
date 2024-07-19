import '../pages/Home.jsx'

function Section() {
    return(
        <div className="flex justify-evenly">
          <div className="destaques-conteiner-1 flex flex-col items-start justify-start w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Novo drop Supreme</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <img src="Camisa" />
            </div>
          </div>
          <div className="destaques-conteiner-2 flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Coleção Adidas</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <img src="Tenis" />
            </div>
          </div>
          <div className="destaques-conteiner-3 flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
            <div className="promo bg-yellow-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
            <h3 className="text-2xl font-bold mb-2">Novo Beats Bass</h3>
            <button type="button" className="btn bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4  hover:bg-pink-600 hover:text-white">Comprar</button>
            <div className="produto">
              <img src="Fone" />
            </div>
          </div>
        </div>
    );
}

export default Section