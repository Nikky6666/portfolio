import React from 'react';
import styles from './BigButton.module.css';


function BigButton(props) {
    return <div className={styles.button}>
        <div className={styles.container}>
            <span className={styles.front}>{props.name}</span>
            <span className={styles.center}></span>
            <span className={styles.back}>{props.name}</span>
        </div>
    </div>
}

export default BigButton;
