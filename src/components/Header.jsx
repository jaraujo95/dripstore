import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Cart, List, Search, X } from 'react-bootstrap-icons';

function Header() {
  const [carrinho, setcarrinho] = useState(['tennis,carrinho']);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Header do site
    <header id='' className="w-full px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
      {/* Barra de navegação */}
      <nav className="flex items-center justify-between py-5 bg-white gap-5">
        {/* Logo e Botão de Menu */}
        <div className="flex items-center">
          {/* Botão para abrir o menu em dispositivos móveis */}
          <button id="menu-btn" onClick={toggleSidebar} className="text-xl mr-4 lg:hidden bg-white-700 text-pink-500 p-2 rounded">
            <List />
          </button>
          {/* Link para a página inicial com o logo */}
          <a href="#" className="flex items-center">
            <img src={logo}
              alt="Logo da Loja"
              className="h-13 w-13 object-contain mr-2" />
            {/* Logo da loja */}
          </a>
        </div>

        {/* Input de Pesquisa (somente em telas maiores que 700px) */}
        <div id="searchInput"
          className="hidden sm:flex flex-row w-full items-center justify-center mx-4 rounded-md border border-slate-100 bg-slate-100 focus-within:border-red-600 focus-within:text-red-600">
          <input
            className="w-full p-2 mx-4 border-transparent rounded-md bg-slate-100 focus:outline-none text-black"
            placeholder="Pesquisar produto..." />
          <Search className='mr-5'/>
        </div>
        <Search className='block sm:hidden text-slate-500 hover:text-red-700'/>
        {/* Botões */}
        <div className="flex items-center space-x-4">
          {/* Link para cadastro (somente em telas grandes) */}
          <a href="#" className="text-pink-500 w-[100px] hidden lg:block">Cadastre-se</a>
          {/* Botão de entrar (somente em telas grandes) */}
          <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded hidden lg:block">Entrar</a>
          {/* Ícone de pesquisa (somente em telas pequenas) */}
          <div id="searchIcon" className="custom-lg:hidden custom-sm:flex cursor-pointer">
            <i className="bi bi-search text-pink-500 text-xl"></i>
          </div>
          {/* Ícone de carrinho */}
          <div
            id="cartIcon"
            className="cursor-pointer relative"
            // style={{
            //   position: "relative"
            // }}
          >
            <Cart
              className='text-pink-500 text-xl'

              onClick={() => {
                setcarrinho([...carrinho, "Novo Item"]);

              }}
            />
            {
              carrinho.length === 1 ? '' : <div>
                <span className="animate-ping absolute bottom-2 -right-3 h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <div className='absolute bottom-2 -right-2 bg-pink-500 rounded-full text-xs h-4 w-4 text-center text-white' 
                > 
                  {carrinho.length}

                </div>
              </div>
            }
          </div>
        </div>
      </nav>

      {/* Input de Pesquisa para dispositivos móveis */}
      <div 
      id="searchInputMobile" 
      className="hidden flex-col items-center w-full mt-4 px-4">
        <input 
        type="search" 
        className="w-full max-w-lg p-2 border border-gray-300 rounded"
         placeholder="Pesquisar produto..." />
      </div>

      {/* Menu Dropdown para dispositivos móveis */}      
      <div
       id="sidebar" 
       className={`fixed inset-y-20 left-0 transform lg:hidden transition-transform bg-white duration-300 w-64
       h-screen flex flex-col z-40 space-y-2 mt-4 px-4 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center mb-5'>
            <p className='text-xl font-semibold text-center' >Paginas</p>
            <button
              id="close-btn"
              className="flex z-50 rounded focus:outline-none pr-5 hover:text-red-700"
              onClick={toggleSidebar}
            >
              <X size={22}/>
            </button>
          </div>
          <ul className="flex flex-col space-y-2 text-black font-semibold">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Produtos</a></li>
            <li><a href="#" className="hover:text-pink-500">Categorias</a></li>
            <li><a href="#" className="hover:text-pink-500">Meus Pedidos</a></li>
          </ul>
          <div className="flex flex-col items-center mt-64 gap-5 border-t-[1px] border-slate-500">
            {/* Botão de entrar */}
            <button href="#" className="px-4 py-2 w-36 bg-pink-500 text-white rounded mt-5">Entrar</button>
            {/* Link para cadastro */}
            <a href="#" className="text-pink-500">Cadastre-se</a>
          </div>
        </div>
      </div>

      {/* Links de navegação para dispositivos grandes */}
      <div className="flex flex-row gap-5 text-lg font-semibold text-black">
        <div className="space-x-4 hidden lg:block">
          <a href="#" className="hover:text-pink-500 hover:underline hover:underline-offset-8">Home</a>
          <a href="#" className="hover:text-pink-500 hover:underline hover:underline-offset-8">Produtos</a>
          <a href="#" className="hover:text-pink-500 hover:underline hover:underline-offset-8">Categorias</a>
          <a href="#" className="hover:text-pink-500 hover:underline hover:underline-offset-8">Meus Pedidos</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

