import axios from "axios";

export const instance = axios.create({
    baseURL:'http://www.omdbapi.com/',
    params:{
        apikey:"a5aa57ed"
    }
})
export const instanceGetPoster = axios.create({
    baseURL:'http://img.omdbapi.com/',
    params:{
        apikey:"a5aa57ed"
    }
})