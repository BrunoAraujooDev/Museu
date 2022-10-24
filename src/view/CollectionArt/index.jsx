import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"
import { TemaContext } from "../../Contexts/TemaContext";
import { getObjectByIdDepartmentService } from "../../services/arts.service";
import { getObjectById } from "../../utils/handleHttpRequest";
import "./index.css";
import noImage from "../../assets/noImage.png";

export function CollectionArtComponent() {

    const { id } = useParams();
    const { tema } = useContext(TemaContext);

    const [artLists, setArtLists] = useState([]);
    const [auxArtLists, setAuxArtLists] = useState([]);
    const [maxCount, setMaxCount] = useState(20);
    const [minCount, setMinCount] = useState(0);



    function handleSearch(e){

        const search = e.target.value;

            let words = search.split(" ");

    
            let listFilter = auxArtLists.filter(obj => {
    
                let validWord = words.some( word => obj.title.toLowerCase().includes(word.toLowerCase()) ||
                obj.medium.toLowerCase().includes(word.toLowerCase()) ||
                obj.artistDisplayName.toLowerCase().includes(word.toLowerCase()) 
                )
                
                return validWord;
            })
            
            console.log('listFilter', listFilter)
            if(listFilter.length > 0 && words[0] !== ""){
                setAuxArtLists(listFilter)
                listFilter = []
            } else {
                setAuxArtLists(artLists)
                listFilter = []
            }
        


    }

    
    const getInfoListCollection = async (id) => {

        let list = await getObjectById(id);

                setArtLists((item) => [...item, list])
                setAuxArtLists((item) => [...item, list])  

    }

    const ListCollection = async () => {
        const listId = await getObjectByIdDepartmentService(id)

        if (listId?.data?.objectIDs.length > 0) {
            listId?.data?.objectIDs.forEach((id, index) => {
                if (index >= minCount && index < maxCount) {
                    getInfoListCollection(id)
                }
            })
        }

    };


    useEffect(() => {
        ListCollection()
    }, [minCount])

    useEffect(() => {

        const scrollObserver = new IntersectionObserver((entry) => {
            if (entry.some(entries => entries.isIntersecting)) {
                setMinCount(state => state + 20)
                setMaxCount(state => state + 20)

            }
        })

        scrollObserver.observe(document.querySelector('#sentinel'));

        return () => scrollObserver.disconnect();

    }, [])

    return (
        <article id="collection-article-container">

            <h1 style={{ color: tema.corTexto }}>{auxArtLists[0]?.department}</h1>

            <section className="dept-input-section">
                <input type="text" placeholder="Search a department" className="dept-input-search" 
                    style={{ color: tema.corTexto, backgroundColor: tema.corFundoTema }} 
                    onChange={(e) => handleSearch(e)}
                />
            </section>


            {auxArtLists.length > 0 &&
                auxArtLists.map((art, idx) => {

                    
                        return (
                            <div className="collection-div-card" key={idx} style={{
                                borderColor: tema.corBotao, borderStyle: "solid",
                                backgroundColor: tema.corFundoTema, color: tema.corTexto
                            }}>
                                <figure className="collection-figure-card">
                                    <img className="collection-img-card" src={art.primaryImageSmall !== "" ? art.primaryImageSmall : noImage} alt={art.objectName} />
                                </figure>
                                <div className="collection-div-specs">
                                    <h3 className="collection-title-art">{art.title.length < 45 ? art.title : (art.title.slice(0,45) + "...")}</h3>
                                    <div className="collection-div-artist">
                                        <p>Medium: {art.medium !== "" ? art.medium : "No medium"}</p>
                                        <p>Artist: {art.artistDisplayName !== "" ? art.artistDisplayName : "Unknown"} </p>
                                    </div>
                                    <button className="collection-button-card" style={{ backgroundColor: tema.corBotao, color: tema.corTexto }}>See more</button>
                                </div>


                            </div>
                        )
                    
                })
            }
            <div className="spinner-border text-success" role="status" id="sentinel">
                <span className="visually-hidden">Loading...</span>
            </div>
        </article>
    )
}