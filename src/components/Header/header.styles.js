import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        background: theme.palette.primary.main
    },
    h1: {
        color: theme.palette.fourth.main,
        marginLeft: '1rem'
    },
    padre: {
        display: 'flex',
        margin: '10px',
        alignItems: 'center',
    },
    hijo: {
        padding: '5px',
        margin: '1px',
    }
}));
export default useStyles;