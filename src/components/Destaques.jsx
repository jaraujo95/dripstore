import '../pages/Home.jsx'
import Camisa from '../assets/camisa.svg'
import Tenis from '../assets/tenis.svg'
import Fone from '../assets/fone.svg'

function Destaques() {
  return (
    // Coleções em destaque
    <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-between">
      {/* Coleção 1 */}
      <div className="relative flex flex-col items-start justify-center  w-[405px] h-72 bg-blue-200 rounded-lg p-4">
        {/* Caixa de desconto */}
        <div className="z-10 bg-lime-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
        {/* Título da coleção */}
        <h3 className="z-10 text-2xl font-bold mb-2">Novo drop Supreme</h3>
        {/* Botão Comprar */}
        <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
        {/* Imagem sobre a coleção */}
        <img src={Camisa} className='absolute right-0 bottom-0' />
      </div>
      {/* Coleção 2 */}
      <div className="relative flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
        {/* Caixa de desconto */}
        <div className="z-10 bg-lime-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
        {/* Título da coleção */}
        <h3 className="z-10 text-2xl font-bold mb-2">Coleção Adidas</h3>
        {/* Botão Comprar */}
        <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
        {/* Imagem sobre a coleção */}
        <img src={Tenis} className='absolute right-0 bottom-0' />
      </div>
      {/* Coleção 3*/}
      <div className=" relative flex flex-col items-start justify-center w-[405px] h-72 bg-blue-200 rounded-lg p-4">
        {/* Caixa de desconto */}
        <div className="z-10 bg-lime-300 px-4 py-1 rounded-full font-bold mb-2">30% OFF</div>
        {/* Título da coleção */}
        <h3 className="z-10 text-2xl font-bold mb-2">Novo Beats Bass</h3>
        {/* Botão Comprar */}
        <button type="button" className="btn z-10 bg-gray-100 text-pink-500 font-bold py-2 px-4 rounded-lg mb-4 w-[153px] h-[48px] hover:bg-pink-600 hover:text-white">Comprar</button>
        {/* Imagem sobre a coleção */}
        <img src={Fone} className='absolute right-0 bottom-0' />
      </div>
    </div>
  );
}

export default Destaques