import {instance, instanceGetPoster} from "./instance";


export const api = {
    getContent: (title?: string, page?: number | null, id?: string,plot?:string) => {
        return instance.get('', {
            params: {
                s: title,
                page,
                i: id,
                plot:plot
            }
        })
    },
}