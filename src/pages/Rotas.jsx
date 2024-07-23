import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Produto from "./Produtos";
import Categorio from "./Categoris";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Rotas() {

    return (

        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/produtos" element={<Produto></Produto>}></Route>
                <Route path="/categoria" element={<Categorio></Categorio>}></Route>
            </Routes>
            <Footer />
        </>
    )

}
export default Rotas