const SET_CONNECT = "SET_CONNECT"
let initialState = {
    listConnect: []
}
const connectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONNECT:
            return {
                ...state, listConnect: action.connect
            }
        default:
            return state
    }
}
export const setConnectAC = (connect) => ({type: SET_CONNECT, connect})
export default connectReducer