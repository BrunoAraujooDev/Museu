import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"
import { TemaContext } from "../../Contexts/TemaContext";
import { getObjectByIdDepartmentService } from "../../services/arts.service";
import { getObjectById } from "../../utils/handleHttpRequest";
import "./index.css";

export function CollectionArtComponent() {

    const { id } = useParams();
    const { tema } = useContext(TemaContext);

    const [artListsId, setArtListsId] = useState([]);
    const [artLists, setArtLists] = useState([]);
    const [maxCount, setMaxCount] = useState(20);
    const [minCount, setMinCount] = useState(0);


    const getInfoListCollection = async (id) => {

        const list = await getObjectById(id);


        setArtLists((item) => [...item, list])
    }

    const ListCollection = async () => {
        const listId = await getObjectByIdDepartmentService(id)
        setArtListsId(listId)
        console.log('artListsId', artListsId?.data?.objectIDs)
    };


    useEffect(() => {
        ListCollection().then(() => {

            if (artListsId?.data?.objectIDs.length > 0) {
                artListsId?.data?.objectIDs.forEach((id, index) => {
                    if (index >= minCount && index < maxCount) {
                        getInfoListCollection(id)
                    }
                })
            }
            
        })
    }, [minCount])
    
    useEffect(() => {
        
        const scrollObserver = new IntersectionObserver((entry) => {
            if(entry.some(entries => entries.isIntersecting)){
                setMinCount(state => state + 20)
                setMaxCount(state => state + 20)
                console.log("min", minCount);
                console.log("maxCount", maxCount);
            }
        })

        scrollObserver.observe(document.querySelector('#sentinel'));

        return () => scrollObserver.disconnect();

    }, [])

    return (
        <article id="collection-article-container">


            {artLists.length > 0 &&
                artLists.map((art, idx) => {

                    if (art.primaryImage !== "") {
                        return (
                            <div className="collection-div-card" key={idx} style={{
                                borderColor: tema.corBotao, borderStyle: "solid",
                                backgroundColor: tema.corFundoTema, color: tema.corTexto
                            }}>
                                <figure className="collection-figure-card">
                                    <img className="collection-img-card" src={art.primaryImageSmall} alt={art.objectName} />
                                </figure>
                                <div className="collection-div-specs">
                                    <h3 className="collection-title-art">{art.title}</h3>
                                    <div className="collection-div-artist">
                                        <p>Medium: {art.medium}</p>
                                        <p>Artist: {art.artistDisplayName !== "" ? art.artistDisplayName : "Unknown"} </p>
                                    </div>
                                    <button className="collection-button-card" style={{ backgroundColor: tema.corBotao, color: tema.corTexto }}>See more</button>
                                </div>


                            </div>
                        )
                    }
                })
            }
            <div className="spinner-border text-success" role="status" id="sentinel">
                <span className="visually-hidden">Loading...</span>
            </div>
        </article>
    )
}