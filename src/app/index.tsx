import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import createTheme from 'app/theme/theme';
import { TaskListPage } from 'pages/taskList';
import { useAppSelector } from './store/hooks';
import { selectThemeMode } from 'features/themeMode';

import './index.css';

const App = () => {
    const isDarkMode = useAppSelector(selectThemeMode);

    const theme = useMemo(() => createTheme(isDarkMode), [isDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <TaskListPage />
        </ThemeProvider>
    );
};

export default App;
