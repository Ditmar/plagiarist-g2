import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    menu: {
        'ul': {
            listStyle: 'none',
            'li': {
                marginLeft: '10px'
            }
        }
    }
}));
export default useStyles;