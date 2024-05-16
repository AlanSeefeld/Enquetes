import React, { useState } from "react";
import Cookies from "js-cookie";

const Enquetes = () =>{
    const [usuario,setUsuario] = useState(Cookies.get("usuario"))
    return(
        <>
        {usuario == undefined ? ( alert("Você precisa estar logado")):
            (
                <section>
                    <div className="telaFechar">
                        Enquetes
                    </div>
                    enquetes
                </section> 
            )
        }   
       </>
    )
}

export default Enquetes;