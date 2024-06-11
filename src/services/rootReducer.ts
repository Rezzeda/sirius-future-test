import { combineReducers } from "redux";
import counterReducer, { counterSlice } from "./counterSlice";
import calendarReducer, { calendarSlice } from "./calendarSlice";
import userReducer, { userSlice } from "./userSlice";
import lessonReducer, { lessonSlice } from "./lessonSlice";


export const rootReducer = combineReducers({
    [counterSlice.name] : counterReducer,
    [calendarSlice.name] : calendarReducer,
    [userSlice.name] : userReducer,
    [lessonSlice.name] : lessonReducer,
})