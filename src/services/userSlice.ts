import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sliceName = "user";

interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
    password: string;
    lessonIds: string[]; // занятия
}

interface UserState {
    users: User[];
    currentUser: User | null;
}

const initialState: UserState = {
    users: [
        {
            id: 1,
            name: 'Михаил',
            avatar: 'avatar1.png',
            email: 'mihail@example.com',
            password: '12345',
            lessonIds: ['1', '2'],
        },
        {
            id: 2,
            name: 'Анна',
            avatar: 'avatar2.png',
            email: 'anna@example.com',
            password: '12345',
            lessonIds: ['3', '4'],
        },
    ],
    currentUser: null,
};

export const userSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
