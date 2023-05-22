import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 50,
        boxShadow: '0px 5px 30px #363434',
    },
    header: {
        color: theme.palette.primary3,
        fontSize: 40,
        fontWeight: 700,
        letterSpacing: 10,
    },
    titleAndMode: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    filter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: theme.spacing(1),
        backgroundColor: theme.palette.primary2,
        height: 50,
    },
}));

export default useStyles;
