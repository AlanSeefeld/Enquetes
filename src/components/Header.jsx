import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList,faPlus,faCircleInfo,faUser,faX } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";


const Header = () =>{

    const [usuario,setUsuario] = useState(Cookies.get("usuario"))

  
    
    return(
        <header>
            <nav className="links">
                <div id="start">
                        START
                </div>
               
                <div className="linksHeader">
                    
                    {usuario == undefined ? ( 
                        <>

                            <Link to="/"><FontAwesomeIcon icon={faCircleInfo} /> Sobre</Link>
                            <Link to="/logar"><FontAwesomeIcon icon={faUser} /> Logar</Link> 
                        </>
                             
                    ) : (
                        <>
                            <Link to="/"><FontAwesomeIcon icon={faCircleInfo} /> Sobre</Link>
                            <Link to="/enquete"><FontAwesomeIcon icon={faList} /> Enquetes</Link>
                            <Link to="/add"><FontAwesomeIcon icon={faPlus} /> Adicionar Enquete</Link> 
                            <Link to="/sair"><FontAwesomeIcon icon={faX} /> Sair</Link> 
                        </>                
                        )
                }
                    
                </div>
            </nav>
        </header>
    )
}

export default Header;
