import { ArrowRight } from "react-bootstrap-icons";
import ProductCard from "./ProductCard";
import tenis from '../assets/tenis-produtos.svg'

export default function ProductListing() {
    return(
        <section
            className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] gap-5 pb-20">
            <div className="flex flex-row justify-between w-full">
                <div>
                    <p className="text-2xl sm:text-3xl font-bold">
                        Produtos em alta
                    </p>
                </div>
                <div
                    className="flex flex-row text-sm sm:text-base items-center gap-2 hover:text-red-500 cursor-pointer">
                    <p>Ver todos</p>
                    <div>
                        <ArrowRight size={15}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard desconto="30" img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
                <ProductCard img={tenis} preco="200" precoDesconto="100" marca="K-Swiss V8" categoria="Tênis" genero="Masculino"/>
            </div>
        </section>
    )
}