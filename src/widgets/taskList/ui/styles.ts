import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        backgroundColor: theme.palette.primary2,
        color: theme.palette.primaryText,
    },
    deleteBtn: {
        marginLeft: 'auto',
    },
}));

export default useStyles;
