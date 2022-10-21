import http from "../config/axios";


export const getObjectsService = () => http.get("/objects");

export const getAllDepartmentService =() => http.get("/departments");

export const getSearchService = (req) => http.get(`/search?q=${req}`);

export const getObjectByIdDepartmentService = (id) => http.get(`/objects?departmentIds=${id}`)

export const getObjectByIdService = (id) => http.get(`objects/${id}`)