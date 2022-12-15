import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    menu: {
        'ul': {
            listStyle: 'none',
            'li': {
                marginLeft: '10px'
            }
        }
    },
    sidebarmenu: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        padding: '5px',
        listStyle: 'none',
    }
}));
export default useStyles;