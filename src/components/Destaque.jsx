import Camisete from "../assets/ICONS/camiseta.png"
import Calca from "../assets/ICONS/calca.png"
import Fone from "../assets/ICONS/fone.png"
import "../style/destaque2.css"
export default function Destaque2() {
    return (


        <>
            <div class="colecao-segunda-parte">
            <p class="colecao-dastaque colecao-destaque-segunda">Coleções em destaque</p>
                <div class="conde">
                    <div class="card-circulo">

                        <div class="icon"><img src={Camisete} alt="" /></div>
                        <p class="titulo-circulo">Camisetas</p>
                    </div>
                    <div class="card-circulo">
                        <div class="icon"><img src={Calca} alt="" /></div>
                        <p class="titulo-circulo">Calca</p>
                    </div>
                    <div class="card-circulo">
                        <div class="icon"><img src={Calca} alt="" /></div>
                        <p class="titulo-circulo">Bones</p>
                    </div>
                    <div class="card-circulo">
                        <div class="icon"><img src={Fone} alt="" /></div>
                        <p class="titulo-circulo">Headphones</p>
                    </div>
                    <div class="card-circulo">
                        <div class="icon"><img src={Fone} alt="" /></div>
                        <p class="titulo-circulo"> Tenis</p>
                    </div>
                </div>

            </div>

        </>



    )
}