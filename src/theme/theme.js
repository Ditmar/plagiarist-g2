import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Roboto from '../assets/font/Roboto-Regular.ttf'
const RobotoRegular = {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 100,
    src: `url(${Roboto})`
}
const theme = createTheme({
    typography: {
        fontFamily: [RobotoRegular.fontFamily].join(',')
    },
    palette: {
        primary: {
            main: '#645CAA'
        },
        secondary: {
            main: '#A084CA'
        }, 
        third: {
            main: '#BFACE0'
        }, 
        fourth: {
            main: '#EBC7E8'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [RobotoRegular]
            },
            body: {
                fontFamily: ['Roboto-Regular']
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
                padding: 0
            }
        }
    }
});

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
)
export default Theme;