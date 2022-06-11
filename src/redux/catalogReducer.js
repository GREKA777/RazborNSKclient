const SET_AUTOPART = "SET_AUTOPART"
const SET_TIERS = "SET_TIERS"
const SET_TOTALCOUNT = "SET_TOTALCOUNT"
const SET_PAGE = "SET_PAGE"
const SET_LIMIT = "SET_LIMIT"

let initialState = {
    totalCount: 0,
    page: 1,
    limit: 12,
    listAutopart: [],
    listTiers: []
}
const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTOPART:
            return {
                ...state, listAutopart: action.autoParts
            }
        case SET_TIERS:
            return {
                ...state, listTiers: action.tiers
            }
        case SET_TOTALCOUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_PAGE:
            return {
                ...state, page: action.page
            }
        case SET_LIMIT:
            return {
                ...state, limit: action.limit
            }
        default:
            return state
    }
}
export const setAutopartAC = (autoParts) => ({type: SET_AUTOPART, autoParts})
export const setTiersAC = (tiers) => ({type: SET_TIERS, tiers})
export const setTotalAC = (totalCount) => ({type: SET_TOTALCOUNT, totalCount})
export const setPageAC = (page) => ({type: SET_PAGE, page})
export const setLimitAC = (limit) => ({type: SET_LIMIT, limit})
export default catalogReducer
