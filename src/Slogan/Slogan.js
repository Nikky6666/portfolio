import React from 'react';
import styles from './Slogan.module.css';
import BigButton from "../Common/Buttons/BigButton";
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";


function Slogan() {
  return (
     <div className={styles.slogan}>
        <div className={styles.container}>
        <HeaderTitle headerName="Рассматриваю варианты удаленной работы" theme="light" display={"hide"}/>
        <BigButton name="Нанять меня"/>
     </div>
     </div>

  );
}

export default Slogan;
