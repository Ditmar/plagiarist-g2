import TextField  from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import useStyles from './searchComponent.styles';
const SearchComponent = ({ handlerOnSubmit }) => {
    const classes = useStyles();
    const {form, handlerChangeForm, handlerResetForm} = useForm({search: ''});
    const { search } = form;
    const onSubmitForm = (event) => {
        event.preventDefault();
        handlerOnSubmit(form);
        handlerResetForm();
    };
    return (
        <div className={classes.wrapper}>
            <form onSubmit={onSubmitForm}>
                <TextField name="search" onChange={handlerChangeForm} value={search} id="outlined-basic" label="Buscar" variant="outlined" />
            </form>
         </div>
    )
}
export default SearchComponent;