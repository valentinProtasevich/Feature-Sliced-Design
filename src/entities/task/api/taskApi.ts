import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TaskType } from 'shared/model';

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasksApi: builder.query<TaskType[], void>({
            query: () => 'tasks',
            providesTags: ['Task'],
        }),
        editTask: builder.mutation<TaskType, TaskType>({
            query: (body) => ({
                url: `tasks/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Task'],
        }),
        deleteTaskApi: builder.mutation<void, number>({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],
        }),
        createTask: builder.mutation<TaskType, TaskType>({
            query: (body) => ({
                url: 'tasks',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Task'],
        }),
    }),
});

export const {
    useGetTasksApiQuery,
    useEditTaskMutation,
    useDeleteTaskApiMutation,
    useCreateTaskMutation,
} = taskApi;
