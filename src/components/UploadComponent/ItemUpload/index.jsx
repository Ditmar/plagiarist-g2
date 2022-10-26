import { Button, Paper } from "@material-ui/core";
import { PictureAsPdf } from "@mui/icons-material";
import useStyles from "./itemUpload.styles";

const ItemUpload = ({onCancel, name, type, size, onUpload}) => {
    const classes = useStyles();
    return <Paper className={classes.container} elevation={3}>
        <PictureAsPdf style={{ color: 'red' }} /> {name}  <br/>  {type} <br/> {size} MB
        <br/>
        <Button variant="outlined" onClick={onUpload} color="#ff0000">
            Upload file
        </Button>
        <Button variant="outlined" onClick={onCancel} color="#ff0000">
            Cancel File
        </Button>
    </Paper>
}
export default ItemUpload;