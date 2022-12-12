import Documents from './Documents/Index.Documents'
import {useState, useEffect } from "react";
import getData from './services/index';
import useStyles from './reports.styles';

const Index = () => {
    const [reports,setReports]=useState(null)
    
    const classes = useStyles();

    useEffect(()=>{
        getData(setReports)
    },[])
    
    return (
        <div >
            {reports != null? 
            <div className={classes.wrap}>
                <Documents documents={reports.documents} type="Documentos"/>
                <Documents documents={reports.reviewed} type="Revisados"/>
                <Documents documents={reports.copys} type="Copias Detectadas"/>
            </div> 
            : ''}   
        </div>
    )
}
export default Index;