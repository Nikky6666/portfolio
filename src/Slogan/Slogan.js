import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Common/Button/Button";
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";


function Slogan() {
  return (
     <div className={styles.slogan}>
        <div className={styles.container}>
        <HeaderTitle headerName="Рассматриваю варианты удаленной работы" theme="light"/>
        <Button name="Нанять меня" theme="light"/>
     </div>
     </div>

  );
}

export default Slogan;
