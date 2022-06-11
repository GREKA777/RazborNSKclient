import {$authHost} from "./index";

export const createHistory = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.post("api/history", {userId, tierId, autopartId})
    return data
}

export const fetchHistory = async(userId, limit, page) => {
    const {data} = await $authHost.get("api/history", {params: {userId, limit, page}})
    return data
}

export const deleteHistory = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.delete("api/history", {params: {userId, tierId, autopartId}})
    return data
}

export const getOneHistory = async(userId, tierId, autopartId) => {
    const {data} = await $authHost.get("api/history/getOne", {params: {userId, tierId, autopartId}})
    return data
}

export const deleteAllHistory = async(userId, limit, page) => {
    await $authHost.delete("api/history/all", {params: {userId}})
    const {data} = await $authHost.get("api/history", {params: {userId, limit, page}})
    return data
}