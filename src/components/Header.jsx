import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList,faPlus,faCircleInfo,faUser } from "@fortawesome/free-solid-svg-icons";


const Header = () =>{
    return(
        <header>
            <nav className="links">
                <div className="linksHeader">
                    
                    <Link to="/enquete"><FontAwesomeIcon icon={faList} /> Enquetes</Link>
                    
                    <Link to="/"><FontAwesomeIcon icon={faCircleInfo} /> Sobre</Link>
                </div>

                <div className="linksHeader">
                    <Link to="/add"><FontAwesomeIcon icon={faPlus} /> Adicionar Enquete</Link>
                    <Link to="/logar"><FontAwesomeIcon icon={faUser} /> Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;
