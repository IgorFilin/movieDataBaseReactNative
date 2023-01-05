import {instance} from "./instance";


export const api = {
    getContent: (title?: string, page?: number | null, id?: string) => {
        return instance.get('', {
            params: {
                s: title,
                page,
                i: id
            }
        })
    }
}