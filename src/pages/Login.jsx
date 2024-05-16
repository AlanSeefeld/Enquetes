import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Login = () =>{
    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")
    const [logado,setLogado] = useState(false)
    const [usuarioCookie,setUsuarioCookie] = useState(Cookies.get("usuario"))

    

    const submitForm = (e) => {
        e.preventDefault();
        if(usuario == "Alan" && senha == "1234"){
            setLogado(true)
            Cookies.set("usuario",usuario,{expires: 7})
            Cookies.set("senha",senha,{expires: 7})   
                
        }
    }

    if(logado){
        return <Navigate to="/enquete"/>
    }
    return(
        <>
        {usuarioCookie == undefined?( 
            <section>
                <div className="telaFechar">
                    Tela de Login
                </div>
                <form onSubmit={submitForm}>
                    <label>Usuario</label><br/>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}/><br/>
                    <label>Senha</label><br/>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/><br/>
                    <button type="submit">Acessar</button><br/>
                </form>
            </section>
        ):
            (
                ( alert("Você Já esta logado"))
            )
        }
        </>
    )
}

export default Login;