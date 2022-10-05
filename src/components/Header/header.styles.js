import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        background: theme.palette.primary.main
    },
    h1: {
        color: theme.palette.fourth.main,
        marginLeft: '1rem'
    }
}));
export default useStyles;