import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useCreateTaskMutation } from 'entities/task';
import useStyles from './styles';

export const CreateTaskInput = () => {
    const { classes } = useStyles();
    const [task, setTask] = useState('');
    const [createTaskMutation] = useCreateTaskMutation();

    const createTask = () => {
        createTaskMutation({
            id: Date.now(),
            completed: false,
            title: task,
        });
        setTask('');
    };

    return (
        <Box className={classes.container}>
            <TextField
                className={classes.textField}
                value={task}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTask(event.target.value);
                }}
                variant="standard"
                size="medium"
                placeholder="Create new task"
                fullWidth
                autoFocus
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if (e.code === 'Enter') {
                        createTask();
                    }
                }}
            />
        </Box>
    );
};
