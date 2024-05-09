import React from "react";
import { Routes,Route } from "react-router-dom";
import AddEnquete from "../pages/AddEnquete";
import Enquetes from "../pages/Enquetes";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";

const Rotas = () =>{
    return(
        <Routes>
            <Route path="" element={<Sobre/>}/>
            <Route path="/logar" element={<Login/>}/>
            <Route path="/enquete" element={<Enquetes/>}/>
            <Route path="/add" element={<AddEnquete/>}/>
        </Routes>
    )
}

export default Rotas;