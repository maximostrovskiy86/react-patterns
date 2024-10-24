import React, {useState, useEffect} from 'react';
import {FormContainer} from "../signUpForm/SignUpForm.styled";

const SaveMessageInLocalStorageWithLazyInit = () => {

    const [email, setEmail] = useState(() => { // Lazy initial state call (request) just by the first render because it could call every time
        return JSON.parse(localStorage.getItem('email')) ?? '';
    });
    const [textarea, setTextarea] = useState(() => { // Lazy initial state call (request) just by the first render
        return JSON.parse(localStorage.getItem('textarea')) ?? '';
    });

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

    useEffect(() => {
        window.localStorage.setItem('email', JSON.stringify(email));
    }, [email])

    useEffect(() => {
        window.localStorage.setItem('textarea', JSON.stringify(textarea));
    }, [textarea])


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

export default SaveMessageInLocalStorageWithLazyInit;