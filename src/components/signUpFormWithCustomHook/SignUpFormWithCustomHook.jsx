import React from 'react';
import {FormContainer} from "./SignUpFormWithCustomHook.styled";
import useLocalStorage from "../../hooks/useLocalStorage";


const SignUpFormWithCustomHook = props => {

    const [email, setEmail] = useLocalStorage("email", '');
    const [textarea, setTextarea] = useLocalStorage("textarea", '');


    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("event.target", event.target.name)

        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "textarea":
                setTextarea(value);
                break;
            default:
                return
        }
    }

    return (
        <FormContainer>
            <label htmlFor="">
                <span>Post</span>
                <input
                    type="text"
                    name="email"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="">
                <span>Textarea</span>
                <textarea rows="10"
                          cols="45"
                          name="textarea"
                          value={textarea}
                          onChange={handleChange}
                          required>
                </textarea>
            </label>
            <button type="button">Sign Up</button>
        </FormContainer>
    )
}

export default SignUpFormWithCustomHook;