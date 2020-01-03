import React from 'react';
import styles from './Contacts.module.css';
import BigButton from "../Common/Buttons/BigButton";
import Form from "./Form/Form";
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";


function Contacts() {
  return (
     <div className={styles.contacts}>
        <div className={styles.container}>
        <HeaderTitle headerName="Контакты" theme="dark"/>
        <Form/>
        <BigButton name="Отправить"/>
        </div>
     </div>

  );
}

export default Contacts;
