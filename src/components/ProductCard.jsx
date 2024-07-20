export default function ProductCard ({desconto, img, preco, precoDesconto, marca, categoria, genero}) {
    return (
        <div className="flex flex-col">
            <div
                className="flex flex-col w-full h-48 sm:h-64 bg-white overflow-hidden items-center relative hover:shadow-lg">
                <div
                    className={`flex border-0 items-center justify-center rounded-full bg-lime-300 w-24 h-8 mt-4 ml-4 self-start ${!desconto && 'invisible'}`}>
                    <p><span>{desconto}</span>% OFF</p>
                </div>
                <div
                    className="flex items-center justify-center h-[134px] w-[160px] sm:w-[248px] mr-8 mt-10 absolute sm:mt-5 sm:relative">
                    <img
                        src={img ? img : 'https://placehold.co/254x254'}
                        alt=""
                        className="w-[254px] h-[254px] flex items-center" />
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-sm text-gray-500">{categoria}</p>
                <p className="text-2xl text-gray-700">
                    {marca} - {genero}
                </p>
                <div className="flex flex-row text-2xl font-bold gap-2">
                    <p className={`${desconto ? 'text-gray-500 line-through' : 'text-black'}`}>$<span>{preco}</span></p>

                    <p className={desconto ? '' : 'invisible'}>$<span>{precoDesconto}</span> </p>
                </div>
            </div>
        </div>
    )
}