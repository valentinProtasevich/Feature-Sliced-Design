import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    button: {
        color: theme.palette.primaryText,
        '&:hover': {
            backgroundColor: 'rgba(176, 169, 169, 0.2)',
        },
    },
}));

export default useStyles;
