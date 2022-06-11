import {combineReducers, createStore} from "redux";
import catalogReducer from "./catalogReducer";
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import specificationReducer from "./specificationReducer";
import connectReducer from "./connectReducer";

let reducers = combineReducers({
    catalog: catalogReducer,
    feedbackk: feedbackReducer,
    userData: userReducer,
    orderrr: orderReducer,
    spec: specificationReducer,
    connect: connectReducer
})

let store = createStore(reducers)
export default store