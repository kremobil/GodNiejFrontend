import axios from "axios";

const godniejBackend = axios.create({
    // baseURL: 'https://backend.godniej.org/api',
    baseURL: 'http://localhost:1338/api',
})

export default godniejBackend;