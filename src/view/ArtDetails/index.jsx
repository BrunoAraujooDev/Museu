import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FooterComponent } from "../../components/Footer";
import { TemaContext } from "../../Contexts/TemaContext";
import { getObjectById } from "../../utils/handleHttpRequest";
import "./index.css";
import noImage from "../../assets/noImage.png";


export function ArtDetails() {

    const { id } = useParams();

    const { tema } = useContext(TemaContext);

    const [details, setDetails] = useState([]);

    const handleDetails = async () => {

        let response = await getObjectById(id)
        console.log('response', response)

        setDetails([response])

    }


    useEffect(() => {
        if (details.length === 0) {
            handleDetails()
        }
    }, [])


    return (
        <>
            <article id="art-article-container">
                {
                    details.length > 0 &&

                    details.map((item, idx) => {
                        return (
                            <div key={idx} className="art-div-details" style={{
                                borderColor: tema.corBotao, borderStyle: "solid",
                                backgroundColor: tema.corFundoTema, color: tema.corTexto
                            }}>
                                <section>
                                    <h1>{item.title}</h1>
                                    <p>{item.objectBeginDate} - {item.objectEndDate}</p>
                                    <p><span className="art-span-specs">Artist: </span>
                                        <a target="_blank" href={item.artistWikidata_URL} style={{ color: tema.corTexto }} className="art-a-artist">
                                            {item.artistDisplayName !== "" ? item.artistDisplayName : "Unknown"}
                                        </a>
                                    </p>
                                    <p><span className="art-span-specs">Dimensions:</span> {item.dimensions}</p>
                                    <p><span className="art-span-specs">Medium:</span> {item.medium !== "" ? item.medium : "No medium"}</p>
                                    <p><span className="art-span-specs">Credits:</span> {item.creditLine}</p>
                                    <p><span className="art-span-specs">Public domain:</span> {item.isPublicDomain ? "Yes" : "No"}</p>
                                    <p>{item?.tag !== undefined ?
                                        `${item?.tags[0]?.term} - ${item?.tags[1]?.term} - ${item?.tags[2]?.term}`
                                        : "No tags"}
                                    </p>
                                </section>
                                <section className="art-section-img">
                                    <img src={item.primaryImage !== "" ? item.primaryImageSmall : noImage} alt="Image representing the art" />
                                </section>
                            </div>
                        )
                    })
                }
            </article>
            <FooterComponent />
        </>
    )
}