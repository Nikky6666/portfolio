import React from 'react';
import styles from './SmallButton.module.css';


function SmallButton(props) {
    return <div className={styles.button}>
            {props.name}
    </div>
}

export default SmallButton;
