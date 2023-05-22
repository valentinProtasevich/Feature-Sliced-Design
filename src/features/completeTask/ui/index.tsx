import Checkbox from '@mui/material/Checkbox';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { TaskType } from 'shared/model';
import useStyles from './styles';
import { useEditTaskMutation } from 'entities/task';

interface CompleteButtonProps {
    task: TaskType;
}

export const CompleteButton = ({ task }: CompleteButtonProps) => {
    const { classes } = useStyles();
    const [editTask] = useEditTaskMutation();

    const handleChange = () => {
        editTask({
            ...task,
            completed: !task.completed,
        });
    };

    return (
        <div>
            <Checkbox
                className={classes.checkBox}
                checked={task.completed}
                sx={{ color: 'green' }}
                icon={
                    <RadioButtonUncheckedIcon className={classes.crossIcon} />
                }
                checkedIcon={
                    <CheckOutlinedIcon className={classes.checkIcon} />
                }
                onChange={handleChange}
            />
        </div>
    );
};
