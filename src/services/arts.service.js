import axios from "axios";


export const getObjectsService = () => axios.get("public/collection/v1/objects");

export const getAllDepartmentService =() => axios.get("public/collection/v1/departments");

export const getSearchService = (req) => axios.get(`public/collection/v1/search?q=${req}`);