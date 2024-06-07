import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sliceName = "calendar";

interface CalendarState {
    currentDate: Date;
}

const initialState: CalendarState = {
    currentDate: new Date(),
};

export const calendarSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<Date>) => {
            state.currentDate = action.payload;
        },
        incrementMonth: (state) => {
            const newDate = new Date(state.currentDate);
            newDate.setMonth(newDate.getMonth() + 1);
            state.currentDate = newDate;
        },
        decrementMonth: (state) => {
            const newDate = new Date(state.currentDate);
            newDate.setMonth(newDate.getMonth() - 1);
            state.currentDate = newDate;
        },
        resetToToday: (state) => {
            state.currentDate = new Date();
        },
    },
});

export const { setDate, incrementMonth, decrementMonth, resetToToday } = calendarSlice.actions;
// export const selectCurrentDate = (state: RootState) => state.calendar.currentDate;
export default calendarSlice.reducer;
