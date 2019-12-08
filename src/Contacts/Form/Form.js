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
            <Input placeholder="   ФИО"/>
            <Input placeholder="   E-mail"/>
            <textarea placeholder=" Ваше сообщение..."></textarea>
        </form>

    );
}

export default Form;
