import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: '#000',
        opacity: 0.8
    },
    label: {
        maxWidth: '5rem',
        color: '#fff'
    },
    animationIn: {
        animation: `$loaderIn 1000ms ${theme.transitions.easing.easeInOut}`
    },
    animationOut: {
        animation: `$loaderOut 1000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes loaderIn": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 0.8,
        }
    },
    "@keyframes loaderOut": {
        "0%": {
            opacity: 0.8,
        },
        "100%": {
            opacity: 0,
        }
    }
}));

export default useStyles;