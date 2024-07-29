import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Categoria from "./Categoria";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListingPage from "./ProductListingPage";
import NotDefault from "./NotFound";

function Rotas() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/dripstore/" element={<Navigate to="/dripstore/Home" />} />
                <Route path="/dripstore/Home" element={<Home></Home>}></Route>
                <Route path="/dripstore/Lista-Produtos" element={<ProductListingPage/>}></Route>
                <Route path="/dripstore/Categoria" element={<Categoria></Categoria>}></Route>
                <Route path="/dripstore/Lista-Produtos" element={<ProductListingPage/>} ></Route>
                <Route path="*" element={<NotDefault></NotDefault>} />
            </Routes>
            <Footer />
        </>
    )
}
export default Rotas