import { RootState } from "./store";
import { counterSlice } from "./counterSlice";

export const counterSelector = (state: RootState) => state[counterSlice.name].value;