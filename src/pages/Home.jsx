import '../style/Home.css'
import Destaques from '../components/Destaques.jsx'
import ProductListing from '../components/ProductListing.jsx';
import Section from '../components/Section.jsx';
import { ArrowRight } from "react-bootstrap-icons";
import tenisOferta from '../assets/tenis-oferta-especial.svg'
import Gallery from '../components/Gallery.jsx';
import Colecao from '../components/Colecao.jsx';

export default function Home() {

  return (
    <div className='body'>

      <Gallery />
      <div className='w-full bg-slate-100 pb-24'>

        <Section title="Coleções em destaque">
          <Destaques />
        </Section>

        <Section titleCenter="Coleções em destaque">
          <Colecao/>
        </Section>

        <Section title="Produtos em alta" btnTitle="Ver todos" btn={<ArrowRight size={15} />}>
          <ProductListing />
        </Section>
      </div>

      <section className="mb-5 lg:mb-0">
        <div
          className="flex flex-col items-center justify-center lg:gap-20 bg-white px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] lg:flex-row pt-10">
          <div className="flex relative">
            <div
              className="flex items-center justify-center rounded-full bg-gradiente-oferta w-full sm:w-[400px] xl:w-[500px] m-4 sm:m-10">
              <img
                className="w-full mb-36 invisible"
                src={tenisOferta}
                alt="" />
            </div>
            <img
              className="absolute w-full mt-8 sm:mt-12"
              src={tenisOferta}
              alt="" />
          </div>

          <div
            className="flex flex-col gap-2 lg:py-4 items-center text-center lg:text-left lg:items-start w-full">
            <p className="text-xl text-pink-500 font-bold">
              Oferta especial
            </p>

            <p className="text-3xl sm:text-6xl font-bold">
              Air Jordan edição de colecionador
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
            </p>
            <div className="w-full px-12 sm:px-0">
              <button
                className="bg-pink-500  text-white font-bold py-2 rounded hover:bg-pink-900  w-full sm:w-[250px]">
                Ver Ofertas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
