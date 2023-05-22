import { Typography, Box } from '@mui/material';

import useStyles from './styles';
import { Layout } from 'shared/ui/layout';
import { TaskList } from 'widgets/taskList';
import { ToggleThemeBtn } from 'features/themeMode';
import { CreateTaskInput } from 'features/createTask';
import { TaskFilter } from 'features/taskFilter';

export const TaskListPage = () => {
    const { classes } = useStyles();

    return (
        <>
            <Layout>
                <Box className={classes.container}>
                    <Box className={classes.titleAndMode}>
                        <Typography className={classes.header} variant="h1">
                            TODO
                        </Typography>
                        <ToggleThemeBtn />
                    </Box>
                    <CreateTaskInput />
                    <Box>
                        <TaskList />
                        <Box className={classes.filter}>
                            <TaskFilter />
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </>
    );
};
