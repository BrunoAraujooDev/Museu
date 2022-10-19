import React from "react";
import { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({ children }) {

    const [tema, setTema] = useState(temaPadrao);

    const temaPadrao = {
        corFundoTema: "#212529",
        corTema: "#adb5bd",
        corTexto: "#fff"
    }


    const modificarTema = temaSelecionado => {

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
        <TemaProvider.Provider value={{ modificarTema, tema }}>
            {children}
        </TemaProvider.Provider>
    )
}



