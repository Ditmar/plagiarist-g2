import React from 'react';
import Link from '@mui/material/Link';
import useStyles from './Table.styles';
function preventDefault(event) {
    event.preventDefault();
}
const LinkTitle = () =>{
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link color="primary" href="#"
                onClick={preventDefault}
                className={
                classes.tableCell
                }>
                View Details
            </Link>
        </React.Fragment>
    )
}

export default LinkTitle;
