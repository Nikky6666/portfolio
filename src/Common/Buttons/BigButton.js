import React from 'react';
import styles from './BigButton.module.css';
import Fade from 'react-reveal/Slide';


function BigButton(props) {
    return <Fade bottom>
        <div className={styles.button}>
            <div className={styles.container}>
                <span className={styles.front}>{props.name}</span>
                <span className={styles.center}></span>
                <span className={styles.back}>{props.name}</span>
            </div>
        </div>
    </Fade>
}

export default BigButton;
