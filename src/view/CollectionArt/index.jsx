import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom"
import { getObjectByIdDepartmentService } from "../../services/arts.service";
import { getObjectById } from "../../utils/handleHttpRequest";

export function CollectionArtComponent() {

    const { id } = useParams();
    
    const [artListsId, setArtListsId] = useState([]);
    const [artLists, setArtLists] = useState([]);
    
    
    const getInfoListCollection = async (id) => {
        
        const list = await getObjectById(id);
        
        setArtLists((item) => [...item, list ] )
        console.log('artLists', artLists)
    }

    const ListCollection =  async () => { 
        const listId = await getObjectByIdDepartmentService(id)
        setArtListsId(listId)
        console.log('artListsId', artListsId.data.objectIDs)
    };

    
    useEffect(() => {
        ListCollection().then(() => {
            console.log("entrei");

            if(artListsId.data.objectIDs.length > 0){
                artListsId.data.objectIDs.forEach((id, index) => {
                    if(index < 100){
                            getInfoListCollection(id)
                    }
                })
            }
            
        })
    }, [id])
    return(
        <h5>{JSON.stringify(artLists)}</h5>
    )
}