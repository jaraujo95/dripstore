import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";

export default function ProductListingPage() {
    return (
        <div className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] gap-5 mt-10">
            <div className="flex flex-col-reverse md:justify-between md:flex-row gap-4 items-center">
                <p> <span className="font-semibold">Resultado para "Tênis"</span> - 389 produtos</p>
                <select className="focus:outline-none border-[#474747] focus-within:border-pink-500 rounded-md border-2 p-2" >
                    <option value="">Ordenar por: Mais relevantes</option>
                    <option value="preco-asc">Ordenar por: Preço(Menor para Maior)</option>
                    <option value="preco-desc">Ordenar por: Preço(Maior para Menor)</option>
                    <option value="nome-asc">Ordenar por: Nome(A-Z)</option>
                </select>
            </div>
            <div className="flex flex-row pb-24 justify-between">
                <FilterGroup/>
                <ProductListing details={true}/>
            </div>
        </div>
    )
}