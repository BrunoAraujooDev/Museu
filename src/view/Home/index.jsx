import { useContext } from "react";
import { Department } from "../../components/Departments";
import { FooterComponent } from "../../components/Footer";
import { TemaContext } from "../../Contexts/TemaContext";
import "./index.css";

export const Home = () => {

    const {tema} = useContext(TemaContext);

    return (
        <div id="HomeContainer" style={ { backgroundColor: tema.Tema} }>
            
            <Department/>
            <FooterComponent/>
        </div>
    )
}