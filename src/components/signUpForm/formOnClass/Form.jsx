import React, {Component} from "react";
import {FormContainer} from "./Form.styled";
import {nanoid} from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Form extends Component {

    state = {
        name: '',
        number: ''
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {name, number} = this.state;

        const isExistContact = this.props.isContactExist(name);
        if (!isExistContact) {
            Notify.failure(`${name} is already in contacts`);
            return;
        }

        this.props.addUser({
            name,
            number,
            id: nanoid(8)
        })

        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
            <FormContainer onSubmit={this.handleSubmit}>
                <label htmlFor="">Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">Phone number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Add contact</button>
            </FormContainer>
        )
    }
}

export default Form;