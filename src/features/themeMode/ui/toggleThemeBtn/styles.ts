import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    button: {
        color: theme.palette.primary3,
        '&:hover': {
            color: theme.palette.blue,
        },
    },
}));

export default useStyles;
