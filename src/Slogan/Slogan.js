import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Common/Button/Button";
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";


function Slogan() {
  return (
     <div className={styles.slogan}>
        <div className={styles.container}>
        <HeaderTitle headerName="I Am Available For Freelancer" theme="light"/>
        {/*<h2>I Am Available For Freelancer</h2>*/}
        <Button name="Нанять меня" theme="light"/>
     </div>
     </div>

  );
}

export default Slogan;
