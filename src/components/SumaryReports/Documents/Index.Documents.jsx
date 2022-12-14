import { Button } from '@material-ui/core';
import useStyles from './Documents.styles';
import Grid from '@mui/material/Grid';
const Index = (props) => {
    const classes = useStyles();

    return (
        <div> 
            <Button  className={classes.box} >
                <Grid className={classes.text} >
                    {props.type} 
                    <Grid className={classes.number} >
                        {props.documents}
                    </Grid>    
                </Grid> 
            </Button>             
        </div>
    )
}
export default Index;
