import React from "react";
import { createContext, useState } from "react";



export const TemaContext = createContext();

export function TemaProvider({ children }) {

    const temaPadrao = {
        corFundoTema: "#212529",
        corTema: "#adb5bd",
        corTexto: "#fff",
        corBotao: "#33415c"
    }

    const [tema, setTema] = useState(temaPadrao);

    function modificarTema(temaSelecionado) {

        switch (temaSelecionado) {

            default:
                setTema(temaPadrao);
                break;

            case "claro":
                setTema({
                    corFundoTema: "#f3e9d2",
                    corTema: "#ced4da",
                    corTexto: "#000",
                    corBotao: "#fff"
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



