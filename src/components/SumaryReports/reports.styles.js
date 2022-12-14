import { makeStyles } from "@material-ui/core";
import mq from './config/mq'
const useStyles = makeStyles(theme => ({
    wrap: {
        display:'flex', 
        justifyContent:'space-between',
        flexWrap:'wrap',
        '& > :not(style)': {
            [mq('xxs')] : {
                width: '95%',
                minHeight: '10rem',
            },
            [mq('sm')] : {
                width: '47%',
                minHeight: '10rem',
                display:'flex',                 
            },
            [mq('md')] : {
                width: '25%',
                minHeight: '10rem',
            },
        },
    }
    
}));
export default useStyles;