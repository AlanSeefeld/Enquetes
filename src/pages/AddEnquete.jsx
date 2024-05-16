import React, { useState } from "react";
import Cookies from "js-cookie";
import { useEnquetes } from "../config/EnqueteContext";

const AddEnquete = () =>{
    const {addEnquetes} = useEnquetes();
    const [enquete,setEnquete] = useState("")
    const [opcoes,setOpcoes] = useState("")
    const [usuario,setUsuario] = useState(Cookies.get("usuario"))
    
    const submitForm = (e) => {
        e.preventDefault()
        addEnquetes(enquete)
        
    }
    return(
        
        <>
        {usuario == undefined ? ( alert("Você precisa estar logado")):
            (
            <>
            <section>
                <div className="telaFechar">
                    Adicionar Enquete
                </div>
                <form onSubmit={submitForm}>
                    <label>Qual o titulo da enquete?</label><br/>
                    <input type="text" value={enquete} onChange={(e) => setEnquete(e.target.value)}/><br/>      
                 </form>
            </section>
            </>
            )
        }
        </>
       
    )
}

export default AddEnquete;