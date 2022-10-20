import axios from "axios";


const axios = axios.create({
    baseUrl: 'https://collectionapi.metmuseum.org/'
})

export default axios;