import React, { createContext, useContext, useState } from "react";

const EnqueteContext = createContext();

export const useEnquetes = () => useContext(EnqueteContext);



const EnqueteProvider = ({children}) => {
    const [enquetes,setEnquetes] = useState([])

    const addEnquetes = (enquete) =>{
        setEnquetes([...enquetes,enquete])
        console.log(enquetes)
    }
    return(
        <EnqueteContext.Provider value={{enquetes,addEnquetes}}>
            {children}
        </EnqueteContext.Provider>
    )
}

export default EnqueteProvider;