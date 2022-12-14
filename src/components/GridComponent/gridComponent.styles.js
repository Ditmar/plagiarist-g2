import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrap: {
        display: 'flex',
        flexDirection: 'columns',
        flexWrap: 'wrap',
        gap: '1rem'
    }
}));
export default useStyles;