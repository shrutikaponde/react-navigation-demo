import { combineReducers } from "redux";
import navigation from "./NavigationReducer";
import auth from "./AuthReducer";

export const appReducer = combineReducers({
    navigation,
    auth
})