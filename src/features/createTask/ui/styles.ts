import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        height: 50,
    },
    textField: {
        backgroundColor: theme.palette.primary2,
        '& input': {
            height: 50,
            color: theme.palette.primaryText,
            fontWeight: 700,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(4),
        },
    },
}));

export default useStyles;
