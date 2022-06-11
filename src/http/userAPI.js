import {$authHost, $host} from "./index";

export const registration = async(FIO, email, password) => {
    const {data} = await $host.post("api/user/registration", {FIO, email, password, role: "USER"})
    localStorage.setItem("token", data.token)
    return data.user
}

export const login = async(email, password) => {
    const {data} = await $host.post("api/user/login", {email, password})
    localStorage.setItem("token", data.token)
    return data.user
}

export const check = async() => {
    const {data} = await $authHost.get("api/user/auth")
    localStorage.setItem("token", data.token)
    return data.user
}

export const updateImg = async(img) => {
    const {data} = await $authHost.put("api/user/updateimg", img)
    localStorage.setItem("token", data.token)
    return data.user
}
export const edit = async(id, name) => {
    const {data} = await $authHost.put("api/user/editProf", {id, name})
    localStorage.setItem("token", data.token)
    return data.user
}