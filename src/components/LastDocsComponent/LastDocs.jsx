import React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Title from '../DashboardComponent/Title';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
    event.preventDefault();
}
class LastDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            checked: false
        };
        
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products?limit=5').then(res => res.json()).then(json => {
            this.setState({items: json})
        })
    }
render() {
    return (
        <React.Fragment>
            <Title>Utlimos Documentos Publicados</Title>
            <Typography color="text.secondary"
                sx={{display: 'inline'}}>Group
                <Typography color="primary"
                    sx={{display: 'inline', ml:1}}>
                    Support
                </Typography>
            </Typography>
            <Table size="small" sx={{mt:2, ml:0}}>
                <TableBody> {
                    this.state.items.map((row) => (
                        <TableRow key={
                            row.id
                        }>
                            <TableCell >{
                                row.title
                            }</TableCell>
                            <TableCell align="right">
                                <Link color="primary" href="#"
                                    onClick={preventDefault}
                                    sx={
                                        {mr: 0, float:"left" }
                                }>
                                    View Details
                                </Link>
                                <Typography color="text.secondary"
                                    sx={
                                        {
                                            
                                            fontSize: 13
                                        }
                                }>
                                    {
                                    `${
                                        row.price
                                    } Pag`
                                } </Typography>
                            </TableCell>
                        </TableRow>
                    ))
                } </TableBody>
            </Table>

        </React.Fragment>
    )
            }
}
export default LastDocs;
