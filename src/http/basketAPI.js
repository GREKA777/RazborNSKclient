import {$authHost} from "./index";

export const createBasket = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.post("api/basket", {userId, tierId, autopartId})
    return data
}

export const fetchBasket = async(userId, limit, page) => {
    const {data} = await $authHost.get("api/basket", {params: {userId, limit, page}})
    return data
}

export const deleteBasket = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.delete("api/basket", {params: {userId, tierId, autopartId}})
    return data
}

export const getOneBasket = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.get("api/basket/getOne", {params: {userId, tierId, autopartId}})
    return data
}

export const deleteAllBasket = async(userId, limit, page) => {
    await $authHost.delete("api/basket/all", {params: {userId}})
    const {data} = await $authHost.get("api/basket", {params: {userId, limit, page}})
    return data
}