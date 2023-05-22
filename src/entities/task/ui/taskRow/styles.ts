import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    taskRow: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '20px',
        height: 50,
        fontWeight: 700,
        borderBottom: `1px solid ${theme.palette.primaryText}`,
    },
    completeTask: {
        textDecoration: 'line-through',
        color: theme.palette.completedText,
    },
}));

export default useStyles;
