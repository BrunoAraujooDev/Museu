import React from "react";
import { createContext, useState } from "react";



export const TemaContext = createContext();

export function TemaProvider({ children }) {

    const temaPadrao = {
        corFundoTema: "#212529",
        corTema: "#adb5bd",
        corTexto: "#fff"
    }

    const [tema, setTema] = useState(temaPadrao);

    function modificarTema(temaSelecionado) {

        switch (temaSelecionado) {

            default:
                setTema(temaPadrao);
                break;

            case "claro":
                setTema({
                    corFundoTema: "#f8f9fa",
                    corTema: "#ced4da",
                    corTexto: "#000"
                });
                break;

        }
    };

    return (
        <TemaContext.Provider value={{tema, modificarTema }}>
            {children}
        </TemaContext.Provider>
    )
}



