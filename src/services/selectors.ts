import { RootState } from "./store";
import { counterSlice } from "./counterSlice";
import { calendarSlice } from "./calendarSlice";

export const counterSelector = (state: RootState) => state[counterSlice.name].value;
export const currentDateSelector = (state: RootState) => state[calendarSlice.name].currentDate;