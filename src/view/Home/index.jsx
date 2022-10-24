import { useContext } from "react";
import { Department } from "../../components/Departments";
import { TemaContext } from "../../Contexts/TemaContext";
import "./index.css";

export const Home = () => {

    const { tema } = useContext(TemaContext);

    return (
        <article id="HomeContainer" style={{ backgroundColor: tema.Tema }}>
            <div className="home-div-welcome">
                <p className="home-paragr-welcome">Welcome to the museum</p>
            </div>
            <figure className="home-figure-container">
                <img src="https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/fifth-avenue/fifthave_1520x1520.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=58D8A06FCA4D575DC8B811E9DBDA4129"
                    className="img-carousel" alt="The Met Fifth Avenue" />
            </figure>
            <Department />
        </article>
    )
}