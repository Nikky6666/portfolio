import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Decoration/Button";
import Form from "./Form/Form";


function Contacts() {
  return (
     <div className={styles.contacts}>
        <div className={styles.container}>
        <div className={styles.header}>
            <h2>Contacts</h2>
        </div>
        <Form/>
         <Button name="Submut"/>
        </div>
     </div>

  );
}

export default Contacts;
