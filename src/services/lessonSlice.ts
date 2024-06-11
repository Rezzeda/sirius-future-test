import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sliceName = "lesson";

export interface Lesson {
    id: string;
    date: string; // Формат YYYY-MM-DD
    startTime: string; // Формат HH:MM
    endTime: string; // Формат HH:MM
    teacher: string;
    paidLessons: number;
    lessonName: string;
}

interface LessonsState {
    lessons: Lesson[];
}

const initialState: LessonsState = {
    lessons: [
        {
            id: '1',
            date: '2024-06-10',
            startTime: '10:00',
            endTime: '11:00',
            teacher: 'Мария',
            paidLessons: 0,
            lessonName: 'Ментальная арифметика',
        },
        {
            id: '2',
            date: '2024-06-15',
            startTime: '12:00',
            endTime: '13:00',
            teacher: 'Александр',
            paidLessons: 2,
            lessonName: 'Ментальная арифметика',
        },
        {
            id: '3',
            date: '2024-06-20',
            startTime: '14:00',
            endTime: '15:00',
            teacher: 'Александр',
            paidLessons: 1,
            lessonName: 'Ментальная арифметика',
        },
        {
            id: '4',
            date: '2024-06-25',
            startTime: '09:00',
            endTime: '10:00',
            teacher: 'Марияs',
            paidLessons: 3,
            lessonName: 'Ментальная арифметика',
        },
        {
            id: '5',
            date: '2024-06-25',
            startTime: '11:00',
            endTime: '11:30',
            teacher: 'Александр',
            paidLessons: 3,
            lessonName: 'Ментальная арифметика',
        },
    ],
};

export const lessonSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setLessons: (state, action: PayloadAction<Lesson[]>) => {
            state.lessons = action.payload;
        },
        addLesson: (state, action: PayloadAction<Lesson>) => {
            state.lessons.push(action.payload);
        },
        updateLesson: (state, action: PayloadAction<Lesson>) => {
            const index = state.lessons.findIndex(lesson => lesson.id === action.payload.id);
            if (index !== -1) {
                state.lessons[index] = action.payload;
            }
        },
        removeLesson: (state, action: PayloadAction<string>) => {
            state.lessons = state.lessons.filter(lesson => lesson.id !== action.payload);
        },
    },
});

export const { setLessons, addLesson, updateLesson, removeLesson } = lessonSlice.actions;

export default lessonSlice.reducer;

