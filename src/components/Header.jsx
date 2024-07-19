import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import  {  Cart, List, MenuApp  }  from  'react-bootstrap-icons' ;
// Função que representa o componente Header
function Header() {
  // Use o hook useEffect para adicionar os event listeners após a montagem do componente
  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle');
    const searchIcon = document.getElementById('searchIcon');
    const cartIcon = document.getElementById('cartIcon');
    const menu = document.getElementById('menuDropdown');
    const searchInputMobile = document.getElementById('searchInputMobile');

    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        if (menu) {
          menu.classList.toggle('hidden');
        }
      });
    }

    if (searchIcon) {
      searchIcon.addEventListener('click', function () {
        if (searchInputMobile) {
          searchInputMobile.classList.toggle('hidden');
        }
      });
    }

    if (cartIcon) {
      cartIcon.addEventListener('click', function () {
        alert('Carrinho clicado!'); // Ação temporária para o clique no carrinho
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', function () {
          if (menu) {
            menu.classList.toggle('hidden');
          }
        });
      }

      if (searchIcon) {
        searchIcon.removeEventListener('click', function () {
          if (searchInputMobile) {
            searchInputMobile.classList.toggle('hidden');
          }
        });
      }

      if (cartIcon) {
        cartIcon.removeEventListener('click', function () {
          alert('Carrinho clicado!');
        });
      }
    };
  }, []);

  return (
    // Header do site
    <header className="w-full">
      {/* Barra de navegação */}
      <nav className="flex items-center justify-between p-4 bg-white">
        {/* Logo e Botão de Menu */}
        <div className="flex items-center">
          {/* Botão para abrir o menu em dispositivos móveis */}
          <button id="menuToggle" className="text-xl mr-4 lg:hidden bg-white-700 text-pink-700 p-2 rounded">
            <List/>
          </button>
          {/* Link para a página inicial com o logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Logo da Loja" className="h-13 w-13 object-contain mr-2" /> {/* Logo da loja */}
          </a>
        </div>

        {/* Input de Pesquisa (somente em telas maiores que 700px) */}
        <div id="searchInput" className=" custom-lg:flex items-center justify-center flex-grow mx-4">
          <input type="search" className="w-full max-w-lg p-2 border border-gray-300 rounded mx-4" placeholder="Pesquisar produto..." />
        </div>

        {/* Botões */}
        <div className="flex items-center space-x-4">
          {/* Link para cadastro (somente em telas grandes) */}
          <a href="#" className="text-pink-700 hidden lg:block">Cadastre-se</a>
          {/* Botão de entrar (somente em telas grandes) */}
          <a href="#" className="px-4 py-2 bg-pink-700 text-white rounded hidden lg:block">Entrar</a>
          {/* Ícone de pesquisa (somente em telas pequenas) */}
          <div id="searchIcon" className="custom-lg:hidden custom-sm:flex cursor-pointer">
            <i className="bi bi-search text-pink-700 text-xl"></i>
          </div>
          {/* Ícone de carrinho */}
          <div id="cartIcon" className="cursor-pointer">
            <Cart className='text-pink-700 text-xl'/>
          </div>
        </div>
      </nav>

      {/* Input de Pesquisa para dispositivos móveis */}
      <div id="searchInputMobile" className="hidden flex-col items-center w-full mt-4 px-4">
        <input type="search" className="w-full max-w-lg p-2 border border-gray-300 rounded" placeholder="Pesquisar produto..." />
      </div>

      {/* Menu Dropdown para dispositivos móveis */}
      <div id="menuDropdown" className="lg:hidden block flex-col space-y-2 mt-4 px-4">
        <ul className="flex flex-col space-y-2 text-pink-700">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">Produtos</a></li>
          <li><a href="#" className="hover:text-black">Categorias</a></li>
          <li><a href="#" className="hover:text-black">Meus Pedidos</a></li>
        </ul>
        <div className="flex mt-5">
          {/* Botão de entrar */}
          <a href="#" className="px-4 py-2 bg-pink-700 text-white rounded">Entrar</a>
          {/* Link para cadastro */}
          <a href="#" className="text-pink-700">Cadastre-se</a>
        </div>
      </div>

      {/* Links de navegação para dispositivos grandes */}
      <div className="flex flex-row gap-5 text-lg font-semibold text-pink-700">
        <div className="space-x-4 hidden lg:block">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Produtos</a>
          <a href="#" className="hover:text-black">Categorias</a>
          <a href="#" className="hover:text-black">Meus Pedidos</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

