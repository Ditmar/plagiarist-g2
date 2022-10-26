import { useContext, useState } from "react";
import { post } from "../../async/api";
import { LoaderSpinnerContext } from "../../context/LoaderSpinnerContext";
import useUpload from "../../hooks/useUpload";
import ItemUpload from "./ItemUpload";
import useStyles from "./upload.styles";

const UploadComponent = () => {
    const {setIsLoading, code} = useContext(LoaderSpinnerContext);
    console.log('code ---code', code);
    const classes = useStyles();
    const [styles, setStyles] = useState(false);
    const {checkUpload, formatAccepted, onCancelUpload, file, getUploadForm} = useUpload(code);
    const dragOver = (e) => {
        setStyles(true);
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
    const dragLeave = () => {
        setStyles(false);
        return false;
    }
    const drop  = (e) => {
        console.log('drop file fire')
        e.preventDefault();
        checkUpload(e);
    }
    const onCancel = () => {
        onCancelUpload();
    }
    const onUpload = async() => {
        const formData = getUploadForm();
        setIsLoading(true);
        const response = await post('http://localhost:8000/server/upload', formData, true);
        setIsLoading(false);
        console.log(response)
    }
    return <div className={styles? classes.active: classes.content} onDragOver={dragOver} onDragLeave={dragLeave} onDrop={drop}>
        {formatAccepted && <ItemUpload onCancel={onCancel} {...file} onUpload={ onUpload }/>}
    </div>
}
export default UploadComponent;