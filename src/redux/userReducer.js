const SET_USER = "SET_USER"
const SET_ISAUTH = "SET_ISAUTH"
const SET_BASKET = "SET_BASKET"
const SET_FAVOURITE = "SET_FAVOURITE"
const SET_HISTORY = "SET_HISTORY"
const SET_SUM = "SET_SUM"

let initialState = {
    user: {},
    listBasket: [],
    listFavourite: [],
    listHistory: [],
    isAuth: false,
    basketSum: 0
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.user
            }
        case SET_ISAUTH:
            return {
                ...state, isAuth: action.isAuth
            }
        case SET_BASKET:
            return {
                ...state, listBasket: action.basket
            }
        case SET_FAVOURITE:
            return {
                ...state, listFavourite: action.favourite
            }
        case SET_HISTORY:
            return {
                ...state, listHistory: action.history
            }
        case SET_SUM:
            return {
                ...state, basketSum: action.sum
            }
        default:
            return state
    }
}

export const setUserAC = (user) => ({type: SET_USER, user})
export const setIsAuthAC = (isAuth) => ({type: SET_ISAUTH, isAuth})
export const setBasketAC = (basket) => ({type: SET_BASKET, basket})
export const setFavouriteAC = (favourite) => ({type: SET_FAVOURITE, favourite})
export const setHistoryAC = (history) => ({type: SET_HISTORY, history})
export const setSumAC = (sum) => ({type: SET_SUM, sum})
export default userReducer