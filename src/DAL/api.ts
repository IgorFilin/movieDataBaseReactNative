import axios from "axios";


const instance = axios.create({
    baseURL:'http://www.omdbapi.com/'
})
const key = "a5aa57ed"
export const api = {
    getContent:(title:string)=>{
        return instance.get(`?apikey=${key}&s=${title}`)
    }
}