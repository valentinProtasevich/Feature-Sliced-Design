import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'app/store/store';

export interface TaskFilterState {
    activeFilter: 'All' | 'Active' | 'Completed';
}

const initialState: TaskFilterState = {
    activeFilter: 'All',
};

export const TaskFilterSlice = createSlice({
    name: 'taskFilter',
    initialState,
    reducers: {
        changeFilter: (
            state,
            action: PayloadAction<'All' | 'Active' | 'Completed'>,
        ) => {
            state.activeFilter = action.payload;
        },
    },
});

export const { changeFilter } = TaskFilterSlice.actions;

export const selectTaskFilter = (state: RootState) =>
    state.taskFilter.activeFilter;

export const taskFilterReducer = TaskFilterSlice.reducer;
