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
    const [auxArtLists, setAuxArtLists] = useState([]);
    const [maxCount, setMaxCount] = useState(20);
    const [minCount, setMinCount] = useState(0);


    const getInfoListCollection = async (id) => {

        const list = await getObjectById(id);


        setArtLists((item) => [...item, list])
        setAuxArtLists(list)
    }

    const ListCollection = async () => {
        const listId = await getObjectByIdDepartmentService(id)
        setArtListsId(listId)
        // console.log('artListsId', artListsId?.data?.objectIDs)
    };

    function handleSearch(e){

        const search = e.target.value;
        console.log('search', search)

        let words = search.split(" ");
        console.log('auxArtLists',  auxArtLists)

        const listFilter = auxArtLists.filter(obj => {

            let validWord = words.some( word => obj.title.toLowerCase().includes(word.toLowerCase()) ||
                obj.medium.toLowerCase().includes(word.toLowerCase()) ||
                obj.artistDisplayName.toLowerCase().includes(word.toLowerCase()) 
            )

            return validWord;
        })

        if(listFilter.length > 0){
            console.log('a', listFilter)
        }


    }


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
            if (entry.some(entries => entries.isIntersecting)) {
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

            <section className="dept-input-section">
                <input type="text" placeholder="Search a department" className="dept-input-search" 
                    style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }} 
                    onChange={(e) => handleSearch(e)}
                />
            </section>


            {auxArtLists.length > 0 &&
                auxArtLists.map((art, idx) => {

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