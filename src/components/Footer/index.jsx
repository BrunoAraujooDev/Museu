import "./index.css";
import { useContext } from "react";
import { TemaContext } from "../../Contexts/TemaContext";

export const FooterComponent = () => {

    const {tema} = useContext(TemaContext);

    return (
        <footer id="id-footer" style={ { backgroundColor: tema.corFundoTema, color: tema.corTexto} }>
            <h5>The Metropolitan Museum of Art Collection API</h5>
        </footer>
    )
}