import { configureStore } from '@reduxjs/toolkit';
import { taskApi } from 'entities/task/api';
import { taskFilterReducer } from 'features/taskFilter/model/taskFilterSlice';
import { themeModeReducer } from 'features/themeMode';

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        themeMode: themeModeReducer,
        taskFilter: taskFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
