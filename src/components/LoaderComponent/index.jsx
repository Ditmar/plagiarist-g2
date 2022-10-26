import useStyles from "./loader.styles";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { LoaderSpinnerContext } from "../../context/LoaderSpinnerContext";

const LoaderComponent = () => {
    const {isLoading, log} = useContext(LoaderSpinnerContext);
    const classes = useStyles();
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (isLoading === false) {
            setTimeout( () => {
                setVisible(isLoading);
            }, 900);
        } else {
            setVisible(isLoading);
        }
        
    }, [isLoading]);
    return <>
        {visible && <div className={clsx(classes.container, {[classes.animationIn]: isLoading, [classes.animationOut]: !isLoading})}>
            <div className={classes.label}>
                {log.msn}
            </div>
        </div>}
    </>
}

export default LoaderComponent;