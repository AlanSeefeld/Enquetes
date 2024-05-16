import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Sair = () =>{

    useEffect(() => {
        Cookies.remove("usuario");
        Cookies.remove("senha");
        window.location.reload();
    }, []); 


   return  <Navigate to="/"/>
   
    
}

export default Sair;
