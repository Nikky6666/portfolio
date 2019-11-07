import React from 'react';
import styles from './Button.module.css';


function Button(props) {
  return (
     <div className={styles.button}>
         <button>{props.name}</button>
     </div>

  );
}

export default Button;
