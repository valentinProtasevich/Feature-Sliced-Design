import { createTheme as create } from '@mui/material/styles';

import createPalette from './palette';

export const theme = (isDarkMode: boolean) => ({
    palette: createPalette(isDarkMode),
});

const createTheme = (isDarkMode: boolean) => create(theme(isDarkMode));

export default createTheme;
