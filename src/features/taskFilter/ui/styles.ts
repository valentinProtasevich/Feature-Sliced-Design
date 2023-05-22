import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    all: {
        fontWeight: 700,
        color: theme.palette.blue,
        '&:hover': {
            backgroundColor: 'rgba(176, 169, 169, 0.2)',
        },
    },
    active: {
        fontWeight: 700,
        color: theme.palette.primaryText,
        '&:hover': {
            backgroundColor: 'rgba(176, 169, 169, 0.2)',
        },
    },
    completed: {
        fontWeight: 700,
        color: theme.palette.completedText,
        '&:hover': {
            backgroundColor: 'rgba(176, 169, 169, 0.2)',
        },
    },
    activeFilter: {
        padding: '5px 7px',
        border: `1px solid ${theme.palette.primary.main}`,
    },
}));

export default useStyles;
