import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import classnames from 'classnames';

import { TaskType } from 'shared/model';
import { useDeleteTaskApiMutation } from 'entities/task';
import useStyles from './styles';

interface DeleteButtonProps {
    task: TaskType;
    className?: string;
}

export const DeleteButton = ({ task, className }: DeleteButtonProps) => {
    const { classes } = useStyles();
    const [deleteTask] = useDeleteTaskApiMutation();

    const handleClick = () => {
        deleteTask(task.id);
    };

    return (
        <IconButton
            className={classnames(classes.button, className)}
            aria-label="toggleThemeMode"
            onClick={handleClick}>
            <ClearIcon />
        </IconButton>
    );
};
