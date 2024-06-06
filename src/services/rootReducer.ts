import { combineReducers } from "redux";
import counterReducer, {counterSlice} from "./counterSlice";


export const rootReducer = combineReducers({
    [counterSlice.name] : counterReducer
})