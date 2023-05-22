import Button from '@mui/material/Button';
import classNames from 'classnames';

import useStyles from './styles';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { changeFilter, selectTaskFilter } from '../model/taskFilterSlice';

export const TaskFilter = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const activeFilter = useAppSelector(selectTaskFilter);

    return (
        <>
            <Button
                onClick={() => dispatch(changeFilter('All'))}
                className={classNames(
                    classes.all,
                    activeFilter === 'All' ? classes.activeFilter : null,
                )}>
                All
            </Button>
            <Button
                onClick={() => dispatch(changeFilter('Active'))}
                className={classNames(
                    classes.active,
                    activeFilter === 'Active' ? classes.activeFilter : null,
                )}>
                Active
            </Button>
            <Button
                onClick={() => dispatch(changeFilter('Completed'))}
                className={classNames(
                    classes.completed,
                    activeFilter === 'Completed' ? classes.activeFilter : null,
                )}>
                Completed
            </Button>
        </>
    );
};
