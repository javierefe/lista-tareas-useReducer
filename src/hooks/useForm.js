import {useState} from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value // computed properties, para objetos
        });
    }

    return [values, handleInputChange, reset]
}
