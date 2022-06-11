import {$authHost} from "./index";

export const createFavourite = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.post("api/favourite", {userId, tierId, autopartId})
    return data
}

export const fetchFavourite = async(userId, limit, page) => {
    const {data} = await $authHost.get("api/favourite", {params: {userId, limit, page}})
    return data
}

export const deleteFavourite = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.delete("api/favourite", {params: {userId, tierId, autopartId}})
    return data
}

export const getOneFavourite = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.get("api/favourite/getOne", {params: {userId, tierId, autopartId}})
    console.log(userId, tierId, autopartId)
    return data
}

export const deleteAllFavourite = async(userId, limit, page) => {
    await $authHost.delete("api/favourite/all", {params: {userId}})
    const {data} = await $authHost.get("api/favourite", {params: {userId, limit, page}})
    return data
}