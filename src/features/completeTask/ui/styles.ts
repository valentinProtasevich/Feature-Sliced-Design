import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    checkBox: {
        '&:hover': {
            backgroundColor: 'rgba(176, 169, 169, 0.2)',
        },
    },
    checkIcon: {
        background: `linear-gradient(to bottom right, ${theme.palette.lightBlue}, ${theme.palette.purple})`,
        borderRadius: '50%',
        color: 'white',
    },
    crossIcon: {
        color: theme.palette.lightBlue,
    },
}));

export default useStyles;
