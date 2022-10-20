import { getAllDepartmentService, getObjectsService, getSearchService } from "../services/arts.service"

export const getObjects = async () => {

    try {
        const response = await getObjectsService()

        return response;
    } catch (error) {
        
        console.error(error)
    }
}

export const getAllDepartment = async () => {

    try {
        const response = await getAllDepartmentService()

        return response;
    } catch (error) {
        
        console.error(error)
    }
}

export const getSearch = async (search) => {

    try {
        const response = await getSearchService(search)

        return response;
    } catch (error) {
        
        console.error(error)
    }
}