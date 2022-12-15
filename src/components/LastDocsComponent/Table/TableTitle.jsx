import React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../../DashboardComponent/Title';
import useStyles from './Table.styles';

const TableTitle = () =>{
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Ultimos Documentos Publicados</Title>
            <Typography color="text.secondary" className={classes.displayTitle}
            sx={{mr:1}}>
                Group   
            </Typography>

            <Typography color="primary" className={classes.support}>
                Support
                </Typography>
        </React.Fragment>
    )
}

export default TableTitle;
