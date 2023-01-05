import {instance} from "./instance";
import {SearchTitleContentType} from "../BLL/types/types";


export const api = {
    getContent: (title?: string, page?: number, id?: string) => {
        return instance.get<SearchTitleContentType>('', {
            params: {
                s: title,
                page,
                i: id
            }
        })
    }
}