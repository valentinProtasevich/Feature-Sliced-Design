const commonColors = {
    blue: 'hsl(220, 98%, 61%)', // Bright Blue
    purple: '#9d49f2',
    lightBlue: '#1b68e3',
};

const colors = {
    dark: {
        primary1: 'hsl(235, 21%, 11%)', // Very Dark Blue
        primary2: 'hsl(235, 24%, 19%)', // Very Dark Desaturated
        primary3: 'hsl(234, 39%, 85%)', // Light Grayish Blue
        primaryText: 'hsl(234, 39%, 85%)',
        completedText: 'hsl(234, 11%, 52%)',
    },
    light: {
        primary1: 'hsl(0, 0%, 98%)', // Very Light Gray
        primary2: 'hsl(236, 33%, 92%)', // Very Light Grayish Blue
        primary3: 'hsl(233, 11%, 84%)', // Light Grayish Blue
        primaryText: 'hsl(235, 21%, 45%)',
        completedText: 'hsl(236, 9%, 61%)',
    },
};

declare module '@mui/material/styles' {
    interface Palette {
        blue: string;
        purple: string;
        lightBlue: string;
        primary1: string;
        primary2: string;
        primary3: string;
        primaryText: string;
        completedText: string;
    }

    interface PaletteOptions {
        blue?: string;
        purple?: string;
        lightBlue?: string;
        primary1?: string;
        primary2?: string;
        primary3?: string;
        primaryText: string;
        completedText: string;
    }
}

const createPalette = (isDarkTheme: boolean) => ({
    ...(isDarkTheme ? colors.dark : colors.light),
    ...commonColors,
});

export default createPalette;
