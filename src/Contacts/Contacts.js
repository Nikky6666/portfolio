import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Common/Button/Button";
import Form from "./Form/Form";
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";


function Contacts() {
  return (
     <div className={styles.contacts}>
        <div className={styles.container}>
        <HeaderTitle headerName="Контакты" theme="dark"/>
        <Form/>
        <Button name="Отправить" theme="dark"/>
        </div>
     </div>

  );
}

export default Contacts;
