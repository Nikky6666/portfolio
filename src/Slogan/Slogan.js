import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Decoration/Button";


function Slogan() {
  return (
     <div className={styles.slogan}>
        <div className={styles.container}>
        <h2>I Am Available For Freelancer</h2>
        <Button name="HIRE ME"/>
     </div>
     </div>

  );
}

export default Slogan;
