import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { TaskRow } from 'entities/task';
import { useGetTasksApiQuery } from 'entities/task';
import { CompleteButton } from 'features/completeTask';
import { DeleteButton } from 'features/deleteTask';
import useStyles from './styles';
import { useAppSelector } from 'app/store/hooks';
import { selectTaskFilter } from 'features/taskFilter/model/taskFilterSlice';

export const TaskList = () => {
    const { classes } = useStyles();
    const activeFilter = useAppSelector(selectTaskFilter);
    const { data: tasks = [] } = useGetTasksApiQuery();

    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        if (activeFilter === 'Active') {
            return setFilteredTasks(tasks.filter((task) => !task.completed));
        }
        if (activeFilter === 'Completed') {
            return setFilteredTasks(tasks.filter((task) => task.completed));
        }
        setFilteredTasks(tasks);
    }, [activeFilter, tasks]);

    return (
        <Box className={classes.container}>
            {filteredTasks.map((task) => (
                <TaskRow
                    data={task}
                    key={task.id}
                    before={<CompleteButton task={task} />}
                    after={
                        <DeleteButton
                            className={classes.deleteBtn}
                            task={task}
                        />
                    }
                />
            ))}
        </Box>
    );
};
