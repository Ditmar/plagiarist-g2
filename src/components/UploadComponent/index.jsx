import ItemUpload from "./ItemUpload";
import useStyles from "./upload.styles";

const UploadComponent = () => {
    const classes = useStyles();
    return <div className={classes.content}>
        <ItemUpload />
    </div>
}
export default UploadComponent;