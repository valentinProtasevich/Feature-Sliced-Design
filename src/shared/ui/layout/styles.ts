import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    background: {
        minHeight: '100vh',
        backgroundColor: theme.palette.primary1,
        position: 'relative',
    },
    bgImg: {
        width: '100%',
        height: 250,
        objectFit: 'cover',
        position: 'absolute',
    },
    container: {
        padding: '0 !important',
        position: 'relative',
    },
    children: {
        position: 'relative',
        zIndex: 100,
    },
}));

export default useStyles;
