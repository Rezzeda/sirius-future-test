import { RootState } from "./store";
import { counterSlice } from "./counterSlice";
import { calendarSlice } from "./calendarSlice";
import { userSlice } from "./userSlice";

export const counterSelector = (state: RootState) => state[counterSlice.name].value;
export const currentDateSelector = (state: RootState) => state[calendarSlice.name].currentDate;

export const currentUserSelector = (state: RootState) => state[userSlice.name].currentUser;