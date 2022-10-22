import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"
import { TemaContext } from "../../Contexts/TemaContext";
import { getObjectByIdDepartmentService } from "../../services/arts.service";
import { getObjectById } from "../../utils/handleHttpRequest";
import "./index.css";

export function CollectionArtComponent() {

    const { id } = useParams();
    const { tema} = useContext(TemaContext);

    const [artListsId, setArtListsId] = useState([]);
    const [artLists, setArtLists] = useState([]);


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
            console.log("entrei");

            if (artListsId?.data?.objectIDs.length > 0) {
                artListsId?.data?.objectIDs.forEach((id, index) => {
                    if (index < 100) {
                        getInfoListCollection(id)
                    }
                })
            }

        })
    }, [id])
    return (
        <article id="collection-article-container">


            {
                artLists.map(art => {
                    return (
                        <div className="collection-div-card" key={art.objectID} style={{ borderColor: tema.corBotao, borderStyle: "solid", 
                            backgroundColor: tema.corFundoTema, color: tema.corTexto }}>
                            <figure className="collection-figure-card">
                                <img className="collection-img-card" src={art.primaryImage !== "" ? art.primaryImage : art.primaryImageSmall} alt={art.objectName} />
                            </figure>
                            <div className="collection-div-specs">
                                <h3 className="collection-title-art">{art.title}</h3>
                                <div>
                                    <p>Medium: {art.medium}</p>
                                    <p>Artist: {art.artistDisplayName !== "" ?  art.artistDisplayName : "Unknown"} </p>
                                </div>
                                <button>See more</button>
                            </div>

                            {/* <button></button> */}

                        </div>
                    )
                })
            }



            <h5>{artLists.length}</h5>
        </article>
    )
}