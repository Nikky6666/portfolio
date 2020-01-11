import React from 'react';
import './Form.module.css';
import Fade from 'react-reveal/Slide';

function Input(props) {
    return (
            <input type="text" placeholder={props.placeholder}/>
       )
}

function Form() {
    return (
        <Fade bottom>
        <form>
            <Input placeholder="   ФИО"/>
            <Input placeholder="   E-mail"/>
            <textarea placeholder=" Ваше сообщение..." />
        </form>
        </Fade>
    );
}

export default Form;
