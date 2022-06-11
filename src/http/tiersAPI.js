import {$host} from "./index";
import {$authHost} from "./index";

export const createTiers = async(tiers) => {
    const {data} = await $authHost.post("api/tiers", tiers)
    return data
}

export const fetchTiers = async(page, limit, profile, width, diameter, name, count, sort) => {
    const {data} = await $host.get("api/tiers", {params: {page, limit, profile, width, diameter, name, count, sort}})
    return data
}

export const fetchTier = async(id) => {
    const {data} = await $host.get("api/tiers/" + id)
    return data
}

export const deleteTiers = async(id, page, limit) => {
    await $authHost.delete("api/tiers", {params: {id}})
    const {data} = await $host.get("api/tiers", {params: {page, limit}})
    return data
}

export const fetchRecommendation = async () => {
    const {data} = await $authHost.get('api/tiers/recommend')
    return data
}