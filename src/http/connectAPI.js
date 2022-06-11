import {$host} from "./index";
import {$authHost} from "./index";

export const createConnect = async(connect) => {
    const {data} = await $host.post("api/connect", connect)
    return data
}

export const fetchConnect = async() => {
    const {data} = await $authHost.get("api/connect")
    return data
}

export const deleteConnect = async(id) => {
    await $authHost.delete("api/connect", {params: {id}})
    const {data} = await $authHost.get("api/connect")
    return data
}