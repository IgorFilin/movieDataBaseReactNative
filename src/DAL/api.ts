import {instance} from "./instance";
import {SearchTitleContentType} from "../BLL/types/types";


export const api = {
    getContent:(title:string,page:number)=>{
        return instance.get<SearchTitleContentType>(`?s=${title}&page=${page}`)
    }
}