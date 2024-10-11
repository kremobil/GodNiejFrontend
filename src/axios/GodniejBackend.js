import axios from "axios";

const godniejBackend = axios.create({
    baseURL: 'http://localhost:1337/api',
})

export default godniejBackend;