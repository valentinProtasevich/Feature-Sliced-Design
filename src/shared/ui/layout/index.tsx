import { Container, Box } from '@mui/material';

import bgImg from 'app/assets/images/bg-desktop-dark.jpg';
import useStyles from './styles';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.background}>
            <Container className={classes.container} maxWidth="lg">
                <img
                    className={classes.bgImg}
                    src={bgImg}
                    alt="Purple background"
                />
                <Box className={classes.children}>{children}</Box>
            </Container>
        </Box>
    );
};
