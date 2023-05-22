import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { selectThemeMode, toggleThemeMode } from 'features/themeMode';

import useStyles from './styles';

export const ToggleThemeBtn = () => {
    const { classes } = useStyles();
    const isDarkMode = useAppSelector(selectThemeMode);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleThemeMode());
    };

    return (
        <IconButton
            className={classes.button}
            aria-label="toggleThemeMode"
            onClick={handleClick}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
};
