import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter-x.svg'
import instagram from '../assets/instagram.svg'


export default function Footer() {
    return (
        <footer
            className="flex flex-col bg-[#1F1F1F] h-full text-white px-4 lg:pt-5 py- gap-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
            <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-40 mb-10 mt-4 lg:mt-10">
                <div className="flex flex-col col-span-2 md:col-span-1 gap-5">
                    <div className="flex flex-row items-center gap-2">
                        <div>
                            <img
                                src={logo}
                                alt=""
                                width="220px" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="flex flex-row gap-8 items-center">
                        <img
                            className="cursor-pointer"
                            width="30px"
                            height="30px"
                            src={facebook}
                            alt="" />
                        <img
                            className="cursor-pointer"
                            width="30px"
                            height="30px"
                            src={instagram}
                            alt="" />
                        <img
                            className="cursor-pointer"
                            width="30px"
                            height="30px"
                            src={twitter}
                            alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-2xl font-bold">Informação</p>
                    <nav className="flex flex-col gap-2">
                        <p className="hover:text-pink-500 cursor-pointer">
                            Sobre Drip Store
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            Segurança
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            Wishilist
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">Blog</p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            Trabalhe conosco
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            Meus pedidos
                        </p>
                    </nav>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-2xl font-bold">Categorias</p>
                    <nav className="flex flex-col gap-2">
                        <p className="hover:text-pink-500 cursor-pointer">Camisas</p>
                        <p className="hover:text-pink-500 cursor-pointer">Calças</p>
                        <p className="hover:text-pink-500 cursor-pointer">Bonés</p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            Headphones
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">Tênis</p>
                    </nav>
                </div>
                <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                    <p className="text-2xl font-bold">Contato</p>
                    <address className="flex flex-col gap-2">
                        <p className="hover:text-pink-500 cursor-pointer">
                            Av. Santos Dumont, 1510 - 1 andar - Aldeota,
                            Fortaleza - CE, 60150-161
                        </p>
                        <p className="hover:text-pink-500 cursor-pointer">
                            (85) 3051-3411
                        </p>
                    </address>
                </div>
            </div>
            <div className="flex items-center justify-center border-t pt-4 pb-4">
                <p>@ 2022 Digital College</p>
            </div>
        </footer>
    )
}