import React, {useState} from 'react';
import {FormContainer} from "./SignUpForm.styled";


const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const {name, value} = event.target;

        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value);
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
                <span>Password</span>
                <input
                    type="text"
                    name="password"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="button">Sign Up</button>
        </FormContainer>
    )
}

export default SignUpForm;