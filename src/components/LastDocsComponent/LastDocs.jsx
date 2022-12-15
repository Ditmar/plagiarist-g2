import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TableTitle from './Table/TableTitle';
import apiData from "./services/call";
import useStyles from './LastDocs.styles';

import {useState, useEffect} from "react";
import LinkTitle from './Table/LinkTitle';

const LastDocs = () => {
    const [dataDocs, setDataDocs] = useState(null)

    const classes = useStyles();

    useEffect(() => {
        apiData(setDataDocs);
    }, [])

    return (
        <div>
            <TableTitle></TableTitle>
            {
            dataDocs != null ? <Table size="small" className={classes.marginDocs}>
                <TableBody>{
                    dataDocs.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{
                                row.title
                            }</TableCell>
                            <TableCell align="right">
                                <LinkTitle></LinkTitle>
                                <Typography color="text.secondary"
                                    className={
                                        classes.text
                                }
                                sx={{ml:1}}
                                >
                                    {
                                    `${
                                        row.price
                                    } Pag`
                                } </Typography>
                            </TableCell>
                        </TableRow>
                    ))
                }</TableBody>
            </Table> : ''
        } </div>
    )
}
export default LastDocs;
