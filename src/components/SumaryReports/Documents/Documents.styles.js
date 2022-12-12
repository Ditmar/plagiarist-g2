import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    box: {
        boxSizing: 'border-box',
        width: '258px', 
        height: '134px', 
        borderRadius:'8px',
        background:theme.palette.backgroundBox.main,
        border:'1px solid #DFE0EB',
        '&:hover':{
            border:'1px solid #3751FF',
            background:'#FFFFFF',
        },         
    },
    text:{
        fontFamily:'mulish', 
        fontWeight:'700',
        fontSize:'19px',
        lineHeight:'24px',
        fontStyle:'normal', 
        letterSpacing:'0.4px',
        textAlign:'center',
        color:theme.palette.textBox.main,
        '&:hover':{
            color:'#3751FF',
        },
        textTransform:'none',
    },
    number:{
        fontFamily:'mulish',
        fontWeight:'700',
        fontSize:'40px',
        lineHeight:'50px', 
        fontStyle:'normal', 
        letterSpacing:'1px', 
        textAlign:'center', 
        color:theme.palette.numberBox.main,
        '&:hover':{
            color:'#3751FF',
        }, 
    },    
}));
export default useStyles;