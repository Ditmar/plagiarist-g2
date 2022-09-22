import { TextField } from '@mui/material';
import React from 'react'
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch'
const Search = () => {
    const {form, handlerChangeForm, handlerResetForm} = useForm({search: ''});
    const {search} = form;
    const {result, isLoading} = useFetch('simpson');
    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }
  return (
    <>
        <form onSubmit={handlerSubmit}>
            <TextField id="outlined-basic" label="Search Avatar" variant="outlined" name="search" value={search} onChange={handlerChangeForm} />
        </form>
        <div>
            {result.map(item => (
                <div>
                    {item.id}
                </div>
            ))}
        </div>
    </>
  )
}
export default Search;