import { Box } from '@mui/material';
import classnames from 'classnames';

import { TaskType } from 'shared/model';
import useStyles from './styles';

interface TaskRowProps {
    data: TaskType;
    before?: React.ReactNode;
    after?: React.ReactNode;
}

export const TaskRow = ({ data, before, after }: TaskRowProps) => {
    const { classes } = useStyles();
    const isCompleted = data.completed;

    return (
        <Box
            className={classnames(
                classes.taskRow,
                isCompleted ? classes.completeTask : null,
            )}>
            {before}
            {data.title}
            {after}
        </Box>
    );
};
