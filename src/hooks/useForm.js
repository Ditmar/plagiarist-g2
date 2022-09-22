import { useState } from "react";

const useForm = (initForm) => {
    const [form, setForm] = useState(initForm);
    const handlerChangeForm = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    }
    const handlerResetForm = () => {
        setForm(initForm);
    }
    return {form, handlerChangeForm, handlerResetForm};
}
export default useForm;