import React from 'react';
import styles from './Form.module.css';

function Input(props) {
    return (
            <input type="text" placeholder={props.placeholder}/>
       )
}

function Form() {
    return (
        <form>
            <Input placeholder="   Name"/>
            <Input placeholder="   E-mail"/>
            <textarea placeholder=" Your message..."></textarea>
        </form>

    );
}

export default Form;
