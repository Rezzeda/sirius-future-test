import { combineReducers } from "redux";
import counterReducer, {counterSlice} from "./counterSlice";
import calendarReducer, {calendarSlice} from "./calendarSlice";


export const rootReducer = combineReducers({
    [counterSlice.name] : counterReducer,
    [calendarSlice.name] : calendarReducer,
})