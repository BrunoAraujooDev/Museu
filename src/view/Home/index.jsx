import { useContext } from "react";
import { Department } from "../../components/Departments";
import { FooterComponent } from "../../components/Footer";
import { TemaContext } from "../../Contexts/TemaContext";
import "./index.css";

export const Home = () => {

    const { tema } = useContext(TemaContext);

    return (
        <article id="HomeContainer" style={{ backgroundColor: tema.Tema }}>
            <div className="home-div-welcome">
                <p className="home-paragr-welcome">Welcome to the museum</p>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/fifth-avenue/fifthave_1520x1520.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=58D8A06FCA4D575DC8B811E9DBDA4129"
                            className="d-block w-100 img-carousel" alt="The Met Fifth Avenue" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/cloisters/cloisters-locations-met-museum-photos-brett-beyer-32-jpg-original-300dpi.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=9BE5A1A8F6F5251B538C18959E2F4AA3"
                            className="d-block w-100 img-carousel" alt="The Met Cloisters" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.metmuseum.org/-/media/images/join-and-give/membership/holiday-images/memberholidayparty.jpg?h=1600&amp;iar=0&amp;mw=2400&amp;w=2400&amp;sc_lang=en&amp;hash=A787566345836BDFCE59D781696B24A8"
                            className="d-block w-100 img-carousel" alt="..." />
                    </div>
                </div>
            </div>
            <Department />
            <FooterComponent />
        </article>
    )
}