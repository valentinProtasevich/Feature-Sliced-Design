import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'app/store/store';

export interface ThemeModeState {
    isDarkMode: boolean;
}

const initialState: ThemeModeState = {
    isDarkMode: true,
};

export const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleThemeMode } = themeModeSlice.actions;

export const selectThemeMode = (state: RootState) => state.themeMode.isDarkMode;

export const themeModeReducer = themeModeSlice.reducer;
