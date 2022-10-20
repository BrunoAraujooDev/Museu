import axios from "axios";


const http = axios.create({
    baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1'
})



export default http;