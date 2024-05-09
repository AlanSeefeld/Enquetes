import React from "react";

const Login = () =>{
    return(
       
            <section>
                <div className="telaFechar">
                    Tela de Login
                </div>
                <form>
                    <label>Usuario</label><br/>
                    <input type="text"/><br/>
                    <label>Senha</label><br/>
                    <input type="password"/><br/>
                    <button type="submit">Acessar</button><br/>
                </form>
            </section>
        
    )
}

export default Login;