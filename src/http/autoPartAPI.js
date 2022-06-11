import {$host} from "./index";
import {$authHost} from "./index";

export const createAutoPart = async(autoPart) => {
    const {data} = await $authHost.post("api/autoPart", autoPart)
    return data
}

export const fetchAutoParts = async(page, limit, name, car, typeId, sort) => {
    const {data} = await $host.get("api/autoPart", {params: {page, limit, name, car, typeId, sort}})
    return data
}

export const fetchAutoPart = async(id) => {
    const {data} = await $host.get("api/autoPart/" + id)
    return data
}

export const deleteAutoPart = async(id, page, limit) => {
    await $authHost.delete("api/autoPart", {params: {id}})
    const {data} = await $host.get("api/autoPart", {params: {page, limit}})
    return data
}

export const fetchRecommendation = async () => {
    const {data} = await $authHost.get('api/autoPart/recommend')
    return data
}