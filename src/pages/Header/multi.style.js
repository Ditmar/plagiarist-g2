import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar:{
        width: '44px',
        height: '44px',
        right:'0px',
        top: `calc(50% - '44px'/2)`,
        border: '1.5px solid #DFE0EB',
        borderRadius: '50%',
        marginTop: '10px',
    },
    containerInput:{
        width: '453px',
        height:' 26px',
        left: '415px',
        top:' 13px',
    },
    inputBuscar:{
        width: '413px',
        height: '24px',
        left: '415px',
        top: '13px',
        background:  '#D9D9D9',
        border: 'none',
    },
    titulo:{
        height: '34px',
        left: '0px',
        top: 'calc(50% - 34px/2 + 1px)',
        marginRight: '120px',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing:'1px',
        color: '#252733',
    },
    media:{
        display: 'flex',
        alignItems: 'center',
    },
    hijo2:{
        marginBottom: '10px',
        marginRight: '5px',
    },
    usuario:{
        width: '200px',
        height: '10px',
        /* SemiBold/14px */
        fontFamily: 'Mulish',
        fontStyle:' normal',
        fontWeight: '600px',
        fontSize: '14px',
        lineHeight: '20px',
        /* or 143% */
        textAlign: 'right',
        letterSpacing: '0.2px',
    },
    button:{
        height: '26px',
        width: '36px',
        color: '#C5C7CD',
        border: 'none',
    }
}));
export default useStyles;