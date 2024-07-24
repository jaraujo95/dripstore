import Camisete from "../assets/ICONS/camiseta.png"
import Calca from "../assets/ICONS/calca.png"
import Fone from "../assets/ICONS/fone.png"
import "../style/destaque2.css"
import "../style/style_mobile/destaque2mobile.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




export default function Destaque2() {
    return (


        <>
            <div className="colecao-segunda-parte">
            <p className="colecao-dastaque colecao-destaque-segunda">Coleções em destaque</p>

                <div className="conde">
                    <div className="card-circulo">
                        <div className="icon"><img src={Camisete} alt="" /></div>
                        <p className="titulo-circulo">Camisetas</p>
                    </div>
                    <div className="card-circulo">
                        <div className="icon"><img src={Calca} alt="" /></div>
                        <p className="titulo-circulo">Calca</p>
                    </div>
                    <div className="card-circulo">
                        <div className="icon"><img src={Calca} alt="" /></div>
                        <p className="titulo-circulo">Bones</p>
                    </div>
                    <div className="card-circulo">
                        <div className="icon"><img src={Fone} alt="" /></div>
                        <p className="titulo-circulo">Headphones</p>
                    </div>
                    <div className="card-circulo">
                        <div className="icon"><img src={Fone} alt="" /></div>
                        <p className="titulo-circulo"> Tenis</p>
                    </div>
                </div>
             

            </div>

        </>



    )
}