import React from "react";
import { Routes,Route } from "react-router-dom";
import EnqueteProvider from "./EnqueteContext";
import AddEnquete from "../pages/AddEnquete";
import Enquetes from "../pages/Enquetes";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Sair from "../pages/Sair";

const Rotas = () =>{
    return(
        <EnqueteProvider>
            <Routes>
                <Route path="" element={<Sobre/>}/>
                <Route path="/logar" element={<Login/>}/>
                <Route path="/enquete" element={<Enquetes/>}/>
                <Route path="/add" element={<AddEnquete/>}/>
                <Route path="/sair" element={<Sair/>}/>
            </Routes>
        </EnqueteProvider>
       
    )
}

export default Rotas;