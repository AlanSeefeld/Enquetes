import React from "react";
import styled from "styled-components";

const StyledButton = styled.footer`
    padding: 15px 0;
    background-color: #0078D7;
    color: #fff;
    text-align: center;
`

const Footer = ()=>{
    return(
        <StyledButton>
            &copy; Alan davi seefeld
        </StyledButton>
    );
}

export default Footer;