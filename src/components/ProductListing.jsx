import ProductCard from "./ProductCard";
import tenis from '../assets/tenis-produtos.svg'

export default function ProductListing() {
    return(
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
    )
}