import axios from "axios";

const godniejBackend = axios.create({
    baseURL: 'https://backend.godniej.org/api',
})

export default godniejBackend;